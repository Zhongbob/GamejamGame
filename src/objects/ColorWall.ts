import Tile from "./Tile";
import MainScene from "../scenes/MainScene";

export default class ColorWall extends Tile {
    constructor(scene: MainScene, x: number, y: number, isWhite: boolean) {
        super(scene, x, y, isWhite, { white: 0xffffff, black: 0x000000 });
    }

    block(player){
        return player.isWhite !== this.isWhite;   
    }
}