import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = {
    "walls": [
        {
            "x": 0,
            "y": 0
        },
        {
            "x": 0,
            "y": 1
        },
        {
            "x": 0,
            "y": 2
        },
        {
            "x": 7,
            "y": 2
        },
        {
            "x": 8,
            "y": 2
        },
        {
            "x": 9,
            "y": 2
        },
        {
            "x": 10,
            "y": 2
        },
        {
            "x": 11,
            "y": 2
        },
        {
            "x": 12,
            "y": 2
        },
        {
            "x": 13,
            "y": 2
        },
        {
            "x": 14,
            "y": 2
        },
        {
            "x": 0,
            "y": 3
        },
        {
            "x": 14,
            "y": 3
        },
        {
            "x": 0,
            "y": 4
        },
        {
            "x": 7,
            "y": 4
        },
        {
            "x": 8,
            "y": 4
        },
        {
            "x": 9,
            "y": 4
        },
        {
            "x": 10,
            "y": 4
        },
        {
            "x": 11,
            "y": 4
        },
        {
            "x": 12,
            "y": 4
        },
        {
            "x": 13,
            "y": 4
        },
        {
            "x": 14,
            "y": 4
        },
        {
            "x": 0,
            "y": 5
        },
        {
            "x": 0,
            "y": 6
        }
    ],
    "colorWalls": [],
    "lava": [
        {
            "x": 6,
            "y": 2
        },
        {
            "x": 6,
            "y": 4
        }
    ],
    "colorLava": [],
    "swap": [
        {
            "x": 13,
            "y": 3
        }
    ],
    "colorSwap": [
        {
            "x": 11,
            "y": 3,
            "isWhite": false
        }
    ]
}

const playerConfigs: PlayerConfig[] = [
    { x: 12, y: 3, isWhite: false },
    { x: 3, y: 2, isWhite: false },
    { x:3, y: 4, isWhite: false },
    { x: 5, y: 3, isWhite: false },
]


const size = { gameTileWidth: 15, gameTileHeight: 7 };

export default class Level13 extends MainScene {
    constructor() {
        super('level13', size, tileMapConfig, playerConfigs)
    }
}