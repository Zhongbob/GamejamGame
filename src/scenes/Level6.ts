import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = {
    "walls": [],
    "colorWalls": [
        {
            "x": 6,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 8,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 6,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 8,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 6,
            "y": 4,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 4,
            "isWhite": false
        },
        {
            "x": 8,
            "y": 4,
            "isWhite": false
        }
    ],
    "lava": [],
    "colorLava": [
        {
            "x": 4,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 6,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 8,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 9,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 10,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 4,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 6,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 8,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 9,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 10,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 4,
            "y": 2,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 2,
            "isWhite": true
        },
        {
            "x": 9,
            "y": 2,
            "isWhite": true
        },
        {
            "x": 10,
            "y": 2,
            "isWhite": true
        },
        {
            "x": 4,
            "y": 3,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 3,
            "isWhite": true
        },
        {
            "x": 9,
            "y": 3,
            "isWhite": true
        },
        {
            "x": 10,
            "y": 3,
            "isWhite": true
        },
        {
            "x": 4,
            "y": 4,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 4,
            "isWhite": true
        },
        {
            "x": 9,
            "y": 4,
            "isWhite": true
        },
        {
            "x": 10,
            "y": 4,
            "isWhite": true
        },
        {
            "x": 4,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 6,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 8,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 9,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 10,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 4,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 6,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 8,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 9,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 10,
            "y": 6,
            "isWhite": true
        }
    ]
};

const size = { gameTileWidth: 15, gameTileHeight: 7 };

const playerConfigs: PlayerConfig[] = [
    { x: 2, y: 2, isWhite: true },
    { x: 12, y: 4, isWhite: false }
]

export default class Level6 extends MainScene {
    constructor() {
        super('level6', size, tileMapConfig, playerConfigs)
    }
}

