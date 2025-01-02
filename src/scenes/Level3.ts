import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'
const tileMapConfig: TileMapConfig = {
    colorWalls: [
        // First box (white)
        { x: 0, y: 0, isWhite: true },
        { x: 0, y: 1, isWhite: true },
        { x: 0, y: 2, isWhite: true },
        { x: 0, y: 3, isWhite: true },
        { x: 0, y: 4, isWhite: true },
        { x: 0, y: 5, isWhite: true },
        { x: 0, y: 6, isWhite: true },
        { x: 0, y: 7, isWhite: true },
        { x: 0, y: 8, isWhite: true },
        { x: 0, y: 9, isWhite: true },
        { x: 0, y: 10, isWhite: true },
        { x: 0, y: 11, isWhite: true },
        { x: 0, y: 12, isWhite: true },
        { x: 0, y: 13, isWhite: true },
        { x: 0, y: 14, isWhite: true },
        { x: 1, y: 0, isWhite: true },
        { x: 2, y: 0, isWhite: true },
        { x: 3, y: 0, isWhite: true },
        { x: 4, y: 0, isWhite: true },
        { x: 5, y: 0, isWhite: true },
        { x: 6, y: 0, isWhite: true },
        { x: 6, y: 1, isWhite: true },
        { x: 6, y: 2, isWhite: true },
        { x: 6, y: 3, isWhite: true },
        { x: 6, y: 4, isWhite: true },
        { x: 6, y: 5, isWhite: true },
        { x: 6, y: 6, isWhite: true },
        { x: 6, y: 7, isWhite: true },
        { x: 6, y: 8, isWhite: true },
        { x: 6, y: 9, isWhite: true },
        { x: 6, y: 10, isWhite: true },
        { x: 6, y: 11, isWhite: true },
        { x: 6, y: 12, isWhite: true },
        { x: 6, y: 13, isWhite: true },
        { x: 6, y: 14, isWhite: true },
        { x: 5, y: 14, isWhite: true },
        { x: 4, y: 14, isWhite: true },
        { x: 3, y: 14, isWhite: true },
        { x: 2, y: 14, isWhite: true },
        { x: 1, y: 14, isWhite: true },

        // Second box (black)
        { x: 14, y: 0, isWhite: false },
        { x: 14, y: 1, isWhite: false },
        { x: 14, y: 2, isWhite: false },
        { x: 14, y: 3, isWhite: false },
        { x: 14, y: 4, isWhite: false },
        { x: 14, y: 5, isWhite: false },
        { x: 14, y: 6, isWhite: false },
        { x: 14, y: 7, isWhite: false },
        { x: 14, y: 8, isWhite: false },
        { x: 14, y: 9, isWhite: false },
        { x: 14, y: 10, isWhite: false },
        { x: 14, y: 11, isWhite: false },
        { x: 14, y: 12, isWhite: false },
        { x: 14, y: 13, isWhite: false },
        { x: 14, y: 14, isWhite: false },
        { x: 13, y: 0, isWhite: false },
        { x: 12, y: 0, isWhite: false },
        { x: 11, y: 0, isWhite: false },
        { x: 10, y: 0, isWhite: false },
        { x: 9, y: 0, isWhite: false },
        { x: 8, y: 0, isWhite: false },
        { x: 8, y: 1, isWhite: false },
        { x: 8, y: 2, isWhite: false },
        { x: 8, y: 3, isWhite: false },
        { x: 8, y: 4, isWhite: false },
        { x: 8, y: 5, isWhite: false },
        { x: 8, y: 6, isWhite: false },
        { x: 8, y: 7, isWhite: false },
        { x: 8, y: 8, isWhite: false },
        { x: 8, y: 9, isWhite: false },
        { x: 8, y: 10, isWhite: false },
        { x: 8, y: 11, isWhite: false },
        { x: 8, y: 12, isWhite: false },
        { x: 8, y: 13, isWhite: false },
        { x: 8, y: 14, isWhite: false },
        { x: 9, y: 14, isWhite: false },
        { x: 10, y: 14, isWhite: false },
        { x: 11, y: 14, isWhite: false },
        { x: 12, y: 14, isWhite: false },
        { x: 13, y: 14, isWhite: false },
    ]
};


const playerConfigs: PlayerConfig[] = [
    { x: 3, y: 3, isWhite: true },
    { x: 11, y: 11, isWhite: false }
]


const size = { gameTileWidth: 15, gameTileHeight: 15 };
export default class Level3 extends MainScene {
    constructor() {
        super('level3', size, tileMapConfig, playerConfigs);
    }
}