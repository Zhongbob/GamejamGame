import Tile from "./Tile";
import MainScene from "../scenes/MainScene";
import Player from "./Player";
const rotation = {
    up: 3,
    down: 1,
    left: 0,
    right: 2
}
export default class ColorArrow extends Tile {
    public direction: string;
    constructor(scene: MainScene, x: number, y: number, isWhite: boolean = true,direction: string = "left") {
        super(scene, x, y, isWhite, { white: "arrow_white", black: "arrow_black" });
        this.setSize(32, 32);
        this.setDirection(direction);
        
        
    }

    public swapColor(addToHistory?: boolean): void {
        super.swapColor(addToHistory);
        this.rotate();
        this.rotate();
    }
    createSquare(){
        super.createSquare();
        this.setFrame(rotation[this.direction]);
    }

    block(player){
        const prevMove = player.history[player.history.length - 1];
        const direction = prevMove[prevMove.length - 1];
        if (this.isWhite !== player.isWhite){
            return direction !== this.direction;
        }
        else{
            return true
        }
    }

    setDirection(direction: string){
        this.direction = direction;
        console.log(this.direction)
        this.setFrame(rotation[direction]);
    }

    rotate(){
        const directions = ["up", "right", "down", "left"];
        const index = directions.indexOf(this.direction);
        this.setDirection(directions[(index + 1) % 4]);
    }
}