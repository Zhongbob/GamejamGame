import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = const tileMapConfig: TileMapConfig ={
    "walls": [
        {
            "x": 10,
            "y": 0
        },
        {
            "x": 10,
            "y": 1
        },
        {
            "x": 10,
            "y": 2
        },
        {
            "x": 7,
            "y": 3
        },
        {
            "x": 8,
            "y": 3
        },
        {
            "x": 9,
            "y": 3
        },
        {
            "x": 10,
            "y": 3
        },
        {
            "x": 10,
            "y": 4
        },
        {
            "x": 10,
            "y": 5
        },
        {
            "x": 10,
            "y": 6
        }
    ],
    "colorWalls": [],
    "lava": [
        {
            "x": 3,
            "y": 3
        },
        {
            "x": 6,
            "y": 3
        }
    ],
    "colorLava": [],
    "swap": [],
    "colorSwap": [],
    "arrow": [],
    "colorArrow": [
        {
            "x": 3,
            "y": 0,
            "direction": "right",
            "isWhite": false
        },
        {
            "x": 6,
            "y": 0,
            "direction": "right",
            "isWhite": true
        },
        {
            "x": 3,
            "y": 1,
            "direction": "right",
            "isWhite": false
        },
        {
            "x": 6,
            "y": 1,
            "direction": "right",
            "isWhite": true
        },
        {
            "x": 3,
            "y": 2,
            "direction": "right",
            "isWhite": false
        },
        {
            "x": 6,
            "y": 2,
            "direction": "right",
            "isWhite": true
        },
        {
            "x": 3,
            "y": 4,
            "direction": "right",
            "isWhite": true
        },
        {
            "x": 6,
            "y": 4,
            "direction": "right",
            "isWhite": false
        },
        {
            "x": 3,
            "y": 5,
            "direction": "right",
            "isWhite": true
        },
        {
            "x": 6,
            "y": 5,
            "direction": "right",
            "isWhite": false
        },
        {
            "x": 3,
            "y": 6,
            "direction": "right",
            "isWhite": true
        },
        {
            "x": 6,
            "y": 6,
            "direction": "right",
            "isWhite": false
        }
    ]
}
const playerConfigs: PlayerConfig[] = [
    { x: 1, y: 1, isWhite: true },
    { x: 1, y: 5, isWhite: false },
]


const size = { gameTileWidth: 11, gameTileHeight: 7 };
export default class Level18 extends MainScene {
    constructor() {
        super('level18', size, tileMapConfig, playerConfigs)
    }
}