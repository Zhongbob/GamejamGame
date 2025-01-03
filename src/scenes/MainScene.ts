import 'phaser';
import Player from '../objects/Player';
import { settings } from '../globals';
import TileMap from '../objects/TileMap';
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

export default class MainScene extends Phaser.Scene {
    private deathMessage: Phaser.GameObjects.Text;
    private stop: boolean = false;
    public gameTileWidth: number;
    public gameTileHeight: number;
    public offsetX: number;
    public offsetY: number;
    public players: Player[] = [];
    public tilemap: TileMap;
    private tileMapConfig: TileMapConfig;
    private playerConfigs: PlayerConfig[] = [];
    private levelNumber: number;
    private keyW: Phaser.Input.Keyboard.Key;
    private keyA: Phaser.Input.Keyboard.Key;
    private keyS: Phaser.Input.Keyboard.Key;
    private keyD: Phaser.Input.Keyboard.Key;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private isMoving: boolean[] = [];
    private bgm: Phaser.Sound.BaseSound;
    public triggeredWin: boolean = false;

    constructor(sceneName, size: { gameTileWidth: number, gameTileHeight: number }, TileMapConfig: TileMapConfig, playerConfigs: PlayerConfig[] = []) {
        super(sceneName);
        this.gameTileWidth = size.gameTileWidth;
        this.gameTileHeight = size.gameTileHeight;

        // Offsets initialized to 0, will be calculated in create()
        this.offsetX = 0;
        this.offsetY = 0;
        this.tileMapConfig = TileMapConfig;
        this.playerConfigs = playerConfigs;
        for (var i = 0; i < this.playerConfigs.length; i++) {
            this.isMoving.push(false);
        }
        this.levelNumber = parseInt(sceneName.slice(5));

    }

    preload() {
        // Load assets (e.g., player texture)
        this.load.audio('game', 'assets/game.mp3');
        this.load.image('swap', 'assets/swap.png');
        this.load.image('swap_white', 'assets/swap_white.png');
        this.load.image('swap_black', 'assets/swap_black.png');
        this.load.image('white_player', 'assets/white_player.png');
        this.load.image('black_player', 'assets/black_player.png');
        this.load.image('wall1', 'assets/wall.png');
        this.load.image('wall2', 'assets/wall2.png');

        this.load.spritesheet('arrow', 'assets/arrow.png',
            { frameWidth: 32, frameHeight: 32 }
        );
        this.load.spritesheet('arrow_white', 'assets/arrow_white.png',
            { frameWidth: 32, frameHeight: 32 }
        );
        this.load.spritesheet('arrow_black', 'assets/arrow_black.png',
            { frameWidth: 32, frameHeight: 32 }
        );
    }

    calculateOffsets() {
        // Calculate the offsets to center the map
        const mapWidth = this.gameTileWidth * settings.gridSize;
        const mapHeight = this.gameTileHeight * settings.gridSize;

        this.offsetX = (this.scale.width - mapWidth) / 2;
        this.offsetY = (this.scale.height - mapHeight) / 2;
    }

    createBackground() {
        // Create background with offset
        const graphics = this.add.graphics();
        graphics.fillStyle(0xD3D3D3, 1);
        graphics.fillRect(this.offsetX, this.offsetY, this.gameTileWidth * settings.gridSize, this.gameTileHeight * settings.gridSize);
    }

    createGridLines() {
        // Create grid lines with offset
        const graphics = this.add.graphics();
        graphics.lineStyle(1, 0xA9A9A9, 1);
        for (let i = 0; i <= this.gameTileWidth; i++) {
            const position = i * settings.gridSize + this.offsetX;
            graphics.moveTo(position, this.offsetY);
            graphics.lineTo(position, this.gameTileHeight * settings.gridSize + this.offsetY);
        }
        for (let i = 0; i <= this.gameTileHeight; i++) {
            const position = i * settings.gridSize + this.offsetY;
            graphics.moveTo(this.offsetX, position);
            graphics.lineTo(this.gameTileWidth * settings.gridSize + this.offsetX, position);
        }
        graphics.strokePath();
    }
    swapColor() {
        this.tilemap.swapColor();
    }
    create() {
        this.createText(50, 50, `Level ${this.levelNumber}`, '24px');
        this.createText(50, 100, 'Z to undo', '16px');
        this.createText(50, 130, 'R to restart', '16px');

        if (!this.registry.get('bgm')) {
            // Add and play the BGM
            this.bgm = this.sound.add('game', { loop: true });
            this.bgm.play();
            
            // Add fade-in effect
            this.tweens.add({
                targets: this.bgm,
                volume: {
                    from: 0,
                    to: 0.5
                },
                duration: 1000
            });
        
            // Store BGM in the registry
            this.registry.set('bgm', this.bgm);
        }
        
        

        for (var i = 0; i < this.playerConfigs.length; i++) {
            this.isMoving[i] = false;
        }
        // Calculate offsets before creating elements
        this.calculateOffsets();

        // Create background and grid
        this.createBackground();

        this.tilemap = new TileMap(this, this.tileMapConfig);

        this.createGridLines();
        this.players = [];
        // Create players with offset applied
        for (const playerConfig of this.playerConfigs) {
            this.players.push(new Player(this, playerConfig.x, playerConfig.y, playerConfig.isWhite));
        }

        // Create input listeners
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.input.keyboard.on('keydown', (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                this.swapColor();
            }
            if (event.code === 'KeyZ') {

                this.undo();
            }
            if (event.code === 'KeyR') {
                this.restart();
            }
        });
    }

    undo() {
        if (this.deathMessage) {
            this.deathMessage.destroy();
        }
        this.stop = false;

        for (const player of this.players) {
            player.undo();
        }
        this.tilemap.undo();
    }
    playerMovementHandler(){
        for (const isMoving of this.isMoving) {
            if (isMoving) {
                return;
            }
        }
        var moveX = 0;
        var moveY = 0;
        if (this.cursors.left.isDown || this.keyA.isDown) {
            moveX = -1;
        }
        else if (this.cursors.right.isDown || this.keyD.isDown) {
            moveX = 1;
        }
        else if (this.cursors.up.isDown || this.keyW.isDown) {
            moveY = -1;
        }
        else if (this.cursors.down.isDown || this.keyS.isDown) {
            moveY = 1;
        }
        else {
            return;
        }
        for (var i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            this.isMoving[i] = true;
            player.move(moveX, moveY);
        }
        for (const player of this.players) {
            player.wallHandler();
        }
        for (const player of this.players) {
            player.lavaHandler();
        }
        for (var i = 0; i < this.players.length; i++) {
            for (const player of this.players) {
                player.playerHandler(this.players);
            }
        }
        
        for (const player of this.players) {
            player.swapHandler();
        }
        for (var i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            const curIter = i;
            player.animateMove(()=>{
                this.isMoving[curIter] = false
            }, moveX, moveY);
            player.completeHandling();
        }


    }
    update(time: number, delta: number) {
        if (this.stop) return;
        for (const player of this.players) {
            player.update(time);
        }
        this.playerMovementHandler();
        var alive = 0;
        for (const player of this.players){
            if (!player.dead){
                alive++;
            }
        }
        if (alive === 1){
            this.win();
        }

    }
    win() {
        if (this.triggeredWin) return;
        this.triggeredWin = true;
        // Fade out the scene
        this.cameras.main.fadeOut(1000, 0, 0, 0); // Fade out over 1 second to black
    
        // Wait for the fade-out to complete, then start the next scene
        this.cameras.main.on('camerafadeoutcomplete', () => {
            this.scene.start(`level${this.levelNumber + 1}`);
        });
    }
    restart() {
        this.stop = false;

        this.scene.restart();
    }
    lose() {
        this.stop = true;
    
        // Delay for a few seconds before displaying the message
        setTimeout(() => {
            const message = this.add.text(
                this.scale.width / 2, // Center horizontally
                this.scale.height - 50, // Near the bottom of the screen
                'You died! Press Z to undo or R to restart level',
                {
                    fontFamily: '"Press Start 2P"',
                    fontSize: '16px',
                    color: '#ff0000', // Reddish text color
                    align: 'center',
                }
            ).setOrigin(0.5).setAlpha(0); // Initially transparent
            this.deathMessage = message;
            // Fade in the message
            this.tweens.add({
                targets: message,
                alpha: 1, // Fade to fully visible
                duration: 1000, // 1-second fade-in
                ease: 'Power2',
            });
        }, 500); // Delay of 3 seconds after dying
    }
    
    createText(x: number, y: number, content: string, fontSize: string = '16px', color: string = '#ffffff',center:boolean = false): Phaser.GameObjects.Text {
        // Create text object
        const text = this.add.text(x, y, content, {
            fontFamily: '"Press Start 2P"',
            fontSize: fontSize,
            color: color,
            align: 'center',
        });
    
        // Center the text at the given position
        if (center) text.setOrigin(0.5);
    
        return text;
    }
}
