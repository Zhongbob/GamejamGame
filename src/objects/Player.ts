import 'phaser';
import { settings } from '../globals';
import MainScene from '../scenes/MainScene';
import Sprite from './Sprite';

export default class Player extends Sprite {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    private keyW: Phaser.Input.Keyboard.Key | undefined;
    private keyA: Phaser.Input.Keyboard.Key | undefined;
    private keyS: Phaser.Input.Keyboard.Key | undefined;
    private keyD: Phaser.Input.Keyboard.Key | undefined;
    private isMoving: boolean = false;
    private moveDelay: number = 150; // Delay in ms between grid moves
    private lastMoveTime: number = 0;
    public movementTween: Phaser.Tweens.Tween | undefined;
    private handled = false;
    public dead = true
    constructor(scene: MainScene, x: number, y: number, isWhite: boolean) {
        super(scene, x, y, isWhite); // Initialize with placeholder position

        // Assign control scheme
        this.keyW = scene.input.keyboard.addKey('W');
        this.keyA = scene.input.keyboard.addKey('A');
        this.keyS = scene.input.keyboard.addKey('S');
        this.keyD = scene.input.keyboard.addKey('D');
        this.cursors = scene.input.keyboard.createCursorKeys();
    }





    private wrapPosition(x: number, y: number) {
        const scene = this.scene as MainScene; // Cast this.scene to MainScene
        // Wrap the logical position if the player goes out of bounds
        const maxX = scene.gameTileWidth;
        const maxY = scene.gameTileHeight;

        return { x: (x + maxX) % maxX, y: (y + maxY) % maxY };
    }

    knockback(moveX: number, moveY: number, time: number) {
        if (!this.scene || !this.scene.tweens) return
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        const targetX = mainScene.offsetX + this.trueX * settings.gridSize + moveX * 10;
        const targetY = mainScene.offsetY + this.trueY * settings.gridSize + moveY * 10;

        const originalX = mainScene.offsetX + this.trueX * settings.gridSize;
        const originalY = mainScene.offsetY + this.trueY * settings.gridSize;
        this.isMoving = true;
        // Move slightly into the next tile
        this.scene.tweens.add({
            targets: this,
            x: targetX,
            y: targetY,
            duration: this.moveDelay / 2,
            ease: 'Power2',
            onComplete: () => {
                // Shake effect and move back to the original tile
                if (!this.scene) return
                this.scene.tweens.add({
                    targets: this,
                    x: originalX,
                    y: originalY,
                    duration: this.moveDelay / 2,
                    ease: 'Bounce.easeOut',
                    onUpdate: () => {
                        // Slight shake effect during the return
                        this.setAngle(Phaser.Math.Between(-5, 5)); // Random rotation for shake
                    },
                    onComplete: () => {
                        // Reset angle after shake
                        this.isMoving = false;
                        this.lastMoveTime = time
                        this.setAngle(0);
                    },
                });
            },
        });
    }
    tileEventHandler(x: number, y: number, moveX: number, moveY: number, time: number): boolean {
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        const tile = mainScene.tilemap.getTile(x, y);
    
        const direction = moveX === 1
            ? "right"
            : moveX === -1
            ? "left"
            : moveY === 1
            ? "down"
            : "up";
    
        if (!tile) {
            this.history.push([direction]);
            return false;
        }
    
        const result = tile.onLand(this);
    
        switch (result) {
            case "block":
                this.history.push(["block"]);
                this.knockback(moveX, moveY, time);
                return true;
            case "kill":
                this.history.push([direction]);
                mainScene.lose();
                return true;
            case "swap":
                this.history.push(["swap", direction]);
                this.swapColor(false);
                break;
        }
    
        return false; // Default return if no case matches
    }
    move() {
        if (!this.scene || this.dead) return 
        let moveX = 0;
        let moveY = 0;
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        if (this.keyW?.isDown) {
            moveY = -1;
        } else if (this.keyA?.isDown) {
            moveX = -1;
        } else if (this.keyS?.isDown) {
            moveY = 1;
        } else if (this.keyD?.isDown) {
            moveX = 1;
        }
        const { x: newX, y: newY } = this.wrapPosition(this.trueX + moveX, this.trueY + moveY);
        this.trueX = newX;
        this.trueY = newY;
    }

    animateMove(onComplete: () => void) {
        if (!this.scene) return
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        this.isMoving = true;
        this.movementTween = this.scene.tweens.add({
            targets: this,
            x: mainScene.offsetX + this.trueX * settings.gridSize,
            y: mainScene.offsetY + this.trueY * settings.gridSize,
            duration: this.moveDelay,
            onComplete
        });
    }
    completeHandling() {
        this.handled = false
    }

    wallHandler(){
        if (!this.scene || this.handled || this.dead) return
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        const currentTile = mainScene?.tilemap.getTile(this.trueX, this.trueY)
        if (!currentTile) return 
        if (currentTile.block(this)){
            this.handled = true
            this.undo(false)
            this.history.push(["block"])
        }
    }

    playerHandler(players: Player[]){
        if (!this.scene || this.handled || this.dead) return
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        for (const player of players){
            if (player.trueX === this.trueX && player.trueY === this.trueY && player !== this && !player.dead){
                if (player.isWhite !== this.isWhite){
                    const whitePlayer = this.isWhite ? this : player
                    whitePlayer.kill()
                }
                else{
                    this.handled = true
                    this.undo(false)
                    this.history[this.history.length - 1].push("block")
                }
            }
        }
    }
    swapHandler(){
        if (!this.scene || this.handled || this.dead) return
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        const currentTile = mainScene?.tilemap.getTile(this.trueX, this.trueY)
        if (!currentTile) return 
        if (currentTile.swap(this)){
            this.handled = true
            this.history[this.history.length - 1].push("swap")
        }
    }

    lavaHandler(){
        if (!this.scene || this.handled || this.dead) return
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        const currentTile = mainScene?.tilemap.getTile(this.trueX, this.trueY)
        if (!currentTile) return 
        if (currentTile.kill(this)){
            this.handled = true
            this.history[this.history.length - 1].push("kill")
            mainScene.lose()
        }
    }

    update(time: number) {
        // if (!this.scene || this.isMoving || time - this.lastMoveTime < this.moveDelay) {
        //     return;
        // }
        // const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        // let moveX = 0;
        // let moveY = 0;

        // // WASD controls
        // if (this.keyW?.isDown) {
        //     moveY = -1;
        // } else if (this.keyA?.isDown) {
        //     moveX = -1;
        // } else if (this.keyS?.isDown) {
        //     moveY = 1;
        // } else if (this.keyD?.isDown) {
        //     moveX = 1;
        // }

        // // Arrow key controls
        // if (this.cursors?.up?.isDown) {
        //     moveY = -1;
        // } else if (this.cursors?.left?.isDown) {
        //     moveX = -1;
        // } else if (this.cursors?.down?.isDown) {
        //     moveY = 1;
        // } else if (this.cursors?.right?.isDown) {
        //     moveX = 1;
        // }
        // if (moveX === 0 && moveY === 0) {
        //     return;
        // }

        // const { x: newX, y: newY } = this.wrapPosition(this.trueX + moveX, this.trueY + moveY);
        // // Check if the new position is a wall

        // if (this.tileEventHandler(newX, newY, moveX, moveY, time)) {
        //     return
        // };

        // this.trueX = newX;
        // this.trueY = newY;
        // this.isMoving = true;

        // // Update the sprite's visual position based on logical position
        // this.movementTween = this.scene.tweens.add({
        //     targets: this,
        //     x: mainScene.offsetX + this.trueX * settings.gridSize,
        //     y: mainScene.offsetY + this.trueY * settings.gridSize,
        //     duration: this.moveDelay,
        //     onComplete: () => {
        //         this.isMoving = false;
        //         this.lastMoveTime = time;
        //     },
        // });

    }

    undo(animate: boolean = true) {
        const corresBack = {
            "up": "down",
            "down": "up",
            "left": "right",
            "right": "left"
        }
        const mainScene = this.scene as MainScene; // Cast this.scene to MainScene
        console.log(this.history)
        const prevMove = this.history.pop()
        if (!prevMove) return
        for (const move of prevMove) {
            const back = corresBack[move]
            console.log(move,back)
            if (!back) {
                if (move == "swap") {
                    this.swapColor(false)
                }
                continue
            }

            if (this.isMoving) {
                this.movementTween?.stop()
            }
            let moveX = 0;
            let moveY = 0;
            switch (back) {
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
            const { x: newX, y: newY } = this.wrapPosition(this.trueX + moveX, this.trueY + moveY);
            this.trueX = newX;
            this.trueY = newY;
            if (animate) {
                this.isMoving = true;
                this.movementTween = this.scene.tweens.add({
                    targets: this,
                    x: mainScene.offsetX + this.trueX * settings.gridSize,
                    y: mainScene.offsetY + this.trueY * settings.gridSize,
                    duration: this.moveDelay,
                    onComplete: () => {
                        this.isMoving = false;
                        this.lastMoveTime = 0;
                    },
                });
            }
        }

        
    }
    kill() {
        if (!this.scene) return
        this.history[this.history.length - 1].push("kill")
        this.dead = true;
        this.setAlpha(0)

    }
}