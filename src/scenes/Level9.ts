import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = {
    "walls": [
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
            "x": 15,
            "y": 0
        },
        {
            "x": 16,
            "y": 0
        },
        {
            "x": 17,
            "y": 0
        },
        {
            "x": 18,
            "y": 0
        },
        {
            "x": 1,
            "y": 4
        },
        {
            "x": 2,
            "y": 4
        },
        {
            "x": 3,
            "y": 4
        },
        {
            "x": 4,
            "y": 4
        },
        {
            "x": 5,
            "y": 4
        },
        {
            "x": 6,
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
            "x": 15,
            "y": 4
        },
        {
            "x": 16,
            "y": 4
        },
        {
            "x": 17,
            "y": 4
        },
        {
            "x": 18,
            "y": 4
        }
    ],
    "colorWalls": [
        {
            "x": 16,
            "y": 2,
            "isWhite": false
        }
    ],
    "lava": [
        {
            "x": 0,
            "y": 0
        },
        {
            "x": 19,
            "y": 0
        },
        {
            "x": 0,
            "y": 1
        },
        {
            "x": 19,
            "y": 1
        },
        {
            "x": 0,
            "y": 2
        },
        {
            "x": 19,
            "y": 2
        },
        {
            "x": 0,
            "y": 3
        },
        {
            "x": 19,
            "y": 3
        },
        {
            "x": 0,
            "y": 4
        },
        {
            "x": 19,
            "y": 4
        }
    ],
    "colorLava": [
        {
            "x": 10,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 13,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 10,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 13,
            "y": 2,
            "isWhite": true
        },
        {
            "x": 10,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 13,
            "y": 3,
            "isWhite": true
        }
    ],
    "swap": [
        {
            "x": 7,
            "y": 2
        }
    ]
}

const playerConfigs: PlayerConfig[] = [
    { x: 2, y: 2, isWhite: true },
    { x: 6, y: 2, isWhite: true }
]


const size = { gameTileWidth: 20, gameTileHeight: 5 };

export default class Level9 extends MainScene {
    constructor() {
        super('level9', size, tileMapConfig, playerConfigs)
    }
}