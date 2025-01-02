import MainScene from '../scenes/MainScene';
import Tile from './Tile';
export default class ColorSwap extends Tile {
    constructor(scene: MainScene, x: number, y: number, isWhite: boolean) {
        super(scene, x, y, isWhite, {white: 'swap_white', black: 'swap_black'},true);
    }
    swapColor(addToHistory:boolean = false,force:boolean = false){
        if (force){
            super.swapColor(false);
        }
        return;
    }
    swap(player){
        return player.isWhite === this.isWhite;
    }
}