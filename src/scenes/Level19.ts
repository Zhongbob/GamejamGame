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
            "x": 0,
            "y": 1
        },
        {
            "x": 0,
            "y": 2
        },
        {
            "x": 0,
            "y": 3
        },
        {
            "x": 9,
            "y": 3
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
        }
    ],
    "colorWalls": [],
    "lava": [
        {
            "x": 4,
            "y": 3
        }
    ],
    "colorLava": [
        {
            "x": 7,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 2,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 3,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 4,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 7,
            "y": 6,
            "isWhite": true
        }
    ],
    "swap": [],
    "colorSwap": [],
    "arrow": [],
    "colorArrow": [
        {
            "x": 4,
            "y": 0,
            "direction": "right",
            "isWhite": true
        },
        {
            "x": 4,
            "y": 1,
            "direction": "right",
            "isWhite": true
        },
        {
            "x": 4,
            "y": 2,
            "direction": "right",
            "isWhite": true
        },
        {
            "x": 4,
            "y": 4,
            "direction": "left",
            "isWhite": true
        },
        {
            "x": 4,
            "y": 5,
            "direction": "left",
            "isWhite": true
        },
        {
            "x": 4,
            "y": 6,
            "direction": "left",
            "isWhite": true
        }
    ]
}
const playerConfigs: PlayerConfig[] = [
    { x: 2, y: 1, isWhite: true },
    { x: 2, y: 5, isWhite: false },
]


const size = { gameTileWidth: 10, gameTileHeight: 7 };

export default class Level19 extends MainScene {
    constructor() {
        super('level19', size, tileMapConfig, playerConfigs)
    }
}