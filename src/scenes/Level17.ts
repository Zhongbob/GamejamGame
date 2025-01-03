import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = {
    "walls": [
        {
            "x": 0,
            "y": 3
        },
        {
            "x": 1,
            "y": 3
        },
        {
            "x": 2,
            "y": 3
        },
        {
            "x": 3,
            "y": 3
        },
        {
            "x": 4,
            "y": 3
        },
        {
            "x": 6,
            "y": 6
        },
        {
            "x": 7,
            "y": 6
        },
        {
            "x": 8,
            "y": 6
        },
        {
            "x": 9,
            "y": 6
        }
    ],
    "colorWalls": [],
    "lava": [
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
            "x": 0,
            "y": 4
        },
        {
            "x": 0,
            "y": 5
        },
        {
            "x": 0,
            "y": 6
        },
        {
            "x": 1,
            "y": 6
        },
        {
            "x": 2,
            "y": 6
        },
        {
            "x": 3,
            "y": 6
        },
        {
            "x": 4,
            "y": 6
        }
    ],
    "colorLava": [
        {
            "x": 5,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 2,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 3,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 4,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 6,
            "isWhite": true
        }
    ],
    "swap": [],
    "colorSwap": [],
    "arrow": [
        {
            "x": 2,
            "y": 1,
            "direction": "left"
        }
    ]
}
const playerConfigs: PlayerConfig[] = [
    { x: 2, y: 1, isWhite: true },
    { x: 2, y: 5, isWhite: false },
]


const size = { gameTileWidth: 10, gameTileHeight: 7 };

export default class Level17 extends MainScene {
    constructor() {
        super('level17', size, tileMapConfig, playerConfigs)
    }
}