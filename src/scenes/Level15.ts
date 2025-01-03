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
            "x": 1,
            "y": 0
        },
        {
            "x": 2,
            "y": 0
        },
        {
            "x": 3,
            "y": 0
        },
        {
            "x": 4,
            "y": 0
        },
        {
            "x": 5,
            "y": 0
        },
        {
            "x": 6,
            "y": 0
        },
        {
            "x": 7,
            "y": 0
        },
        {
            "x": 8,
            "y": 0
        },
        {
            "x": 9,
            "y": 0
        },
        {
            "x": 10,
            "y": 0
        },
        {
            "x": 11,
            "y": 0
        },
        {
            "x": 12,
            "y": 0
        },
        {
            "x": 13,
            "y": 0
        },
        {
            "x": 14,
            "y": 0
        },
        {
            "x": 0,
            "y": 2
        },
        {
            "x": 1,
            "y": 2
        },
        {
            "x": 2,
            "y": 2
        },
        {
            "x": 3,
            "y": 2
        },
        {
            "x": 4,
            "y": 2
        },
        {
            "x": 5,
            "y": 2
        },
        {
            "x": 6,
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
            "x": 14,
            "y": 2
        }
    ],
    "colorWalls": [
        {
            "x": 8,
            "y": 3,
            "isWhite": true
        },
        {
            "x": 8,
            "y": 4,
            "isWhite": true
        },
        {
            "x": 8,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 8,
            "y": 6,
            "isWhite": true
        }
    ],
    "lava": [
        {
            "x": 0,
            "y": 1
        },
        {
            "x": 14,
            "y": 1
        }
    ],
    "colorLava": [
        {
            "x": 13,
            "y": 1,
            "isWhite": false
        }
    ],
    "swap": [],
    "colorSwap": [],
    "arrow": [
        {
            "x": 12,
            "y": 1,
            "direction": "right"
        },
        {
            "x": 13,
            "y": 2,
            "direction": "up"
        }
    ]
}

const playerConfigs: PlayerConfig[] = [
    { x: 5, y: 3, isWhite: false },
    { x: 5, y: 1, isWhite: true },
]


const size = { gameTileWidth: 15, gameTileHeight: 7 };

export default class Level15 extends MainScene {
    constructor() {
        super('level15', size, tileMapConfig, playerConfigs)
    }
}