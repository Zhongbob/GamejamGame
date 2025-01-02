import Sprite from "./Sprite";
import MainScene from "../scenes/MainScene";
import Colors from "../types/Colors";
import Player from "./Player";
export default class Tile extends Sprite {
    constructor (scene: MainScene, x: number, y: number, isWhite: boolean, colors?: Colors|undefined, isSprite: boolean = false) {
        super(scene, x, y, isWhite,colors,isSprite);
    }

    block(player:Player) {
        return false;
    }

    kill(player:Player) {
        return false;
    }

    swap(player:Player) {
        return false;
    }

    onLand(player:Player) {
        // returns the corresponding event that should happen
        if (this.block(player)) {
            return "block";
        }
        if (this.kill(player)) {
            return "kill";
        }
        if (this.swap(player)){
            return "swap";
        }
        return;
    }
}