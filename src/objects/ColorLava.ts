import MainScene from '../scenes/MainScene';
import Tile from './Tile';
export default class ColorLava extends Tile {
    constructor(scene: MainScene, x: number, y: number, isWhite: boolean) {
        super(scene, x, y, isWhite, { white: 0xffcfcf, black: 0x5e0202 });
    }

    kill(player){
        return player.isWhite !== this.isWhite;   
    }
}