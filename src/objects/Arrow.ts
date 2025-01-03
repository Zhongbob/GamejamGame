import Tile from "./Tile";
import MainScene from "../scenes/MainScene";
import Player from "./Player";
const rotation = {
    up: 3,
    down: 1,
    left: 0,
    right: 2
}
export default class Arrow extends Tile {
    public direction: string;
    constructor(scene: MainScene, x: number, y: number, direction: string = "left") {
        super(scene, x, y, false, { white: "arrow", black: "arrow" });
        this.setSize(32, 32);
        this.setDirection(direction);
        
        
    }
    createSquare(){
        super.createSquare();
        this.setFrame(rotation[this.direction]);
    }

    block(player){
        const prevMove = player.history[player.history.length - 1];
        const direction = prevMove[prevMove.length - 1];
        console.log(direction, this.direction)
        return direction !== this.direction
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