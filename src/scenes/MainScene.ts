import 'phaser';
import Player from '../objects/Player';
import { settings } from '../globals';
import TileMap from '../objects/TileMap';
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

export default class MainScene extends Phaser.Scene {
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
    private isMoving: boolean = false;

    constructor(sceneName, size: { gameTileWidth: number, gameTileHeight: number }, TileMapConfig: TileMapConfig, playerConfigs: PlayerConfig[] = []) {
        super(sceneName);
        this.gameTileWidth = size.gameTileWidth;
        this.gameTileHeight = size.gameTileHeight;

        // Offsets initialized to 0, will be calculated in create()
        this.offsetX = 0;
        this.offsetY = 0;
        this.tileMapConfig = TileMapConfig;
        this.playerConfigs = playerConfigs;
        this.levelNumber = parseInt(sceneName.slice(5));

    }

    preload() {
        // Load assets (e.g., player texture)
        this.load.image('swap', 'assets/swap.png');
        this.load.image('swap_white', 'assets/swap_white.png');
        this.load.image('swap_black', 'assets/swap_black.png');
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
                this.lose();
            }
        });
    }

    undo() {
        for (const player of this.players) {
            player.undo();
        }
        this.tilemap.undo();
    }
    update(time: number, delta: number) {
        for (const player of this.players) {
            player.update(time);
        }
        const playerCoords: { [coord: string]: Player } = {};
        for (const player of this.players) {
            const coord = `${player.trueX},${player.trueY}`;
            if (playerCoords[coord]) {
                const otherPlayer = playerCoords[coord];

                if (player.isWhite === otherPlayer.isWhite) {
                    if (player.movementTween) {
                        player.movementTween.stop();
                        const prevMove = player.history[player.history.length - 1];
                        player.undo(false);
                        var moveX = 0;
                        var moveY = 0;
                        for (const direction of prevMove) {
                            switch (direction) {
                                case "up":
                                    moveY = -1;
                                    break;
                                case "down":
                                    moveY = 1;
                                    break;
                                case "left":
                                    moveX = -1;
                                    break;
                                case "right":
                                    moveX = 1;
                                    break;
                            }
                        }
                        player.knockback(moveX, moveY, time);
                    }
                    else {
                        otherPlayer.movementTween.stop();
                        otherPlayer.undo(false);
                    }
                }
                else {
                    // destroy the white player
                    if (player.isWhite) {
                        player.destroy();
                        this.players = this.players.filter(p => p !== player);
                    }
                    else {
                        otherPlayer.destroy();
                        this.players = this.players.filter(p => p !== otherPlayer);
                    }
                }
            }
            else {
                playerCoords[coord] = player;
            }
        }
        if (this.players.length === 1) {
            this.win();
        }
    }
    win() {
        this.scene.start(`level${this.levelNumber + 1}`);
    }
    lose() {
        this.scene.restart();
    }
}
