import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = {
    "walls": [],
    "colorWalls": [
        {
            "x": 7,
            "y": 0,
            "isWhite": false
        },
        {
            "x": 8,
            "y": 0,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 0,
            "isWhite": false
        },
        {
            "x": 10,
            "y": 0,
            "isWhite": false
        },
        {
            "x": 11,
            "y": 0,
            "isWhite": false
        },
        {
            "x": 12,
            "y": 0,
            "isWhite": false
        },
        {
            "x": 13,
            "y": 0,
            "isWhite": false
        },
        {
            "x": 14,
            "y": 0,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 8,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 10,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 11,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 12,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 13,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 14,
            "y": 1,
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
            "x": 9,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 10,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 11,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 12,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 13,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 14,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 0,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 1,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 2,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 3,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 4,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 5,
            "y": 3,
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
            "x": 9,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 10,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 11,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 12,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 13,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 14,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 4,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 5,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 6,
            "isWhite": false
        }
    ],
    "lava": [],
    "colorLava": [],
    "swap": [
        {
            "x": 1,
            "y": 1
        }
    ]
}

const playerConfigs: PlayerConfig[] = [
    { x: 3, y: 5, isWhite: true },
    { x: 11, y: 5, isWhite: true }
]


const size = { gameTileWidth: 15, gameTileHeight: 7 };

export default class Level8 extends MainScene {
    constructor() {
        super('level8', size, tileMapConfig, playerConfigs)
    }
}