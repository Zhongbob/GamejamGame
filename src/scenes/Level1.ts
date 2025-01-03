import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = {
    walls: [
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 1, y: 4 },
        { x: 1, y: 5 },
        { x: 1, y: 6 },
        { x: 1, y: 7 },
        { x: 1, y: 8 },
        { x: 13, y: 0 },
        { x: 13, y: 1 },
        { x: 13, y: 2 },
        { x: 13, y: 3 },
        { x: 13, y: 4 },
        { x: 13, y: 5 },
        { x: 13, y: 6 },
        { x: 13, y: 7 },
        { x: 13, y: 8 },

    ]
}

const playerConfigs: PlayerConfig[] = [
    { x: 3, y: 4, isWhite: true },
    { x: 11, y: 4, isWhite: false }
]

const size = { gameTileWidth: 15, gameTileHeight: 9 };
export default class Level1 extends MainScene {
    constructor() {
        super('level1', size, tileMapConfig, playerConfigs);
    }

    create() {
        super.create();
        this.createText(1280/2, 600, 'WASD or Arrow Keys',"24px","white",true);
    }
}