import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig ={
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
            "x": 0,
            "y": 3
        },
        {
            "x": 4,
            "y": 3
        },
        {
            "x": 8,
            "y": 3
        },
        {
            "x": 0,
            "y": 4
        },
        {
            "x": 4,
            "y": 4
        },
        {
            "x": 8,
            "y": 4
        },
        {
            "x": 0,
            "y": 5
        },
        {
            "x": 4,
            "y": 5
        },
        {
            "x": 8,
            "y": 5
        }
    ],
    "colorWalls": [],
    "lava": [
        {
            "x": 0,
            "y": 2
        },
        {
            "x": 4,
            "y": 2
        },
        {
            "x": 8,
            "y": 2
        }
    ],
    "colorLava": [],
    "swap": [
        {
            "x": 4,
            "y": 1
        }
    ],
    "colorSwap": [],
    "arrow": [],
    "colorArrow": [
        {
            "x": 1,
            "y": 2,
            "direction": "up",
            "isWhite": true
        },
        {
            "x": 2,
            "y": 2,
            "direction": "up",
            "isWhite": true
        },
        {
            "x": 3,
            "y": 2,
            "direction": "up",
            "isWhite": true
        },
        {
            "x": 5,
            "y": 2,
            "direction": "down",
            "isWhite": false
        },
        {
            "x": 6,
            "y": 2,
            "direction": "down",
            "isWhite": false
        },
        {
            "x": 7,
            "y": 2,
            "direction": "down",
            "isWhite": false
        }
    ]
}
const playerConfigs: PlayerConfig[] = [
    { x: 1, y: 1, isWhite: true },
    { x: 2, y: 4, isWhite: false },
    { x: 6, y: 4, isWhite: false },
]


const size = { gameTileWidth: 9, gameTileHeight: 6 };

export default class Level20 extends MainScene {
    constructor() {
        super('level20', size, tileMapConfig, playerConfigs)
    }
}