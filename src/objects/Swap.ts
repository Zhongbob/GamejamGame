import Tile from "./Tile";
import MainScene from "../scenes/MainScene";

export default class Swap extends Tile {
    constructor(scene: MainScene, x: number, y: number) {
        super(scene, x, y, false, { white: 'swap', black: 'swap' });
    }
    public swapColor(): void {
        return
    }
    swap(player){
        return true;
    }
}