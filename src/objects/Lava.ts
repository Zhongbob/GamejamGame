import MainScene from '../scenes/MainScene';
import Tile from './Tile';
export default class Lava extends Tile {
    constructor(scene: MainScene, x: number, y: number) {
        super(scene, x, y, false, { white: 0xFF0000, black: 0xFF0000 });
    }

    kill(player){
        return true;
    }
}