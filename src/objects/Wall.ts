import Tile from "./Tile";
import MainScene from "../scenes/MainScene";
import Colors from "../types/Colors";

export default class Wall extends Tile {
    constructor(scene: MainScene, x: number, y: number, isWhite: boolean) {

        super(scene, x, y, isWhite, { white: 0x292929, black: 0x292929 });
    }

    block(player){
        return true;
    }

}