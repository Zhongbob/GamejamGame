import 'phaser';
import { settings } from '../globals';
import MainScene from '../scenes/MainScene';
import Colors from '../types/Colors';
export default class Sprite extends Phaser.GameObjects.Sprite {
    public trueX: number = 0;
    public trueY: number = 0;
    public isWhite: boolean = true;
    public history: string[][] = []
    public colors: Colors = {
        white: 0xffffff,
        black: 0x000000,
    };
    constructor(scene: MainScene, x: number, y: number, isWhite?: boolean | undefined, colors?: Colors|undefined, isSprite: boolean = false) {
        super(scene, 0, 0, "");
        this.trueX = x;
        this.trueY = y;
        this.isWhite = isWhite?? false;
        this.colors = colors?? this.colors;
        scene.add.existing(this);
        if (!isSprite) {
            this.createTexture(scene);
        }
        this.createSquare(scene);
        this.updateVisualPosition(scene);
        this.setOrigin(0, 0);
    }
    private createTexture(scene: Phaser.Scene) {
        const colors = [this.colors.white, this.colors.black];
    
        for (let i = 0; i < colors.length; i++) {
            const graphics = scene.add.graphics();
            const color = Number(colors[i]); // Ensure the color is a valid number
            const textureKey = `${color}`; // Use a unique and descriptive key
    
            // Draw the filled rectangle
            graphics.fillStyle(color, 1);
            graphics.fillRect(0, 0, settings.gridSize, settings.gridSize);
    
            // Generate the texture
            graphics.generateTexture(textureKey, settings.gridSize, settings.gridSize);
    
            // Clean up graphics to save memory
            graphics.destroy();
    
            console.log(`Generated texture: ${textureKey}`);
        }
    }
    
    private createSquare(scene: Phaser.Scene) {
        
        const graphics = scene.add.graphics();

        // Define the square's color based on the isWhite state
        const color = this.isWhite ? this.colors.white : this.colors.black;

        // Assign the graphics texture to this sprite
        const textureKey = `${color}`;
        console.log(textureKey,"textureKey");
        this.setTexture(textureKey); // Ensure texture is applied to the sprite

    }

    private updateVisualPosition(scene: MainScene) {
        // Use trueX and trueY to calculate visual position
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        this.x = mainScene.offsetX + this.trueX * settings.gridSize;
        this.y = mainScene.offsetY + this.trueY * settings.gridSize;
    }
    public swapColor(addToHistory:boolean = true): void {
        this.isWhite = !this.isWhite;
        this.createSquare(this.scene);
        if (addToHistory) this.history.push(["swap"]);
    }

    public undo() {
        // Pop the last move from the history
        const prevMove = this.history.pop();
        if (!prevMove) return
        for (const move of prevMove) {
            if (move == "swap") {
                this.swapColor(false);
            }
        }
    }
}