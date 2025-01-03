import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = {
    "walls": [],
    "colorWalls": [],
    "lava": [
        {
            "x": 0,
            "y": 0
        },
        {
            "x": 14,
            "y": 0
        },
        {
            "x": 0,
            "y": 1
        },
        {
            "x": 14,
            "y": 1
        },
        {
            "x": 0,
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
            "x": 14,
            "y": 4
        },
        {
            "x": 0,
            "y": 5
        },
        {
            "x": 14,
            "y": 5
        },
        {
            "x": 0,
            "y": 6
        },
        {
            "x": 14,
            "y": 6
        }
    ],
    "colorLava": [],
    "swap": [],
    "colorSwap": [],
    "arrow": [
        {
            "x": 8,
            "y": 0,
            "direction": "left"
        },
        {
            "x": 8,
            "y": 1,
            "direction": "left"
        },
        {
            "x": 8,
            "y": 2,
            "direction": "left"
        },
        {
            "x": 6,
            "y": 3,
            "direction": "up"
        },
        {
            "x": 8,
            "y": 3,
            "direction": "left"
        },
        {
            "x": 8,
            "y": 4,
            "direction": "left"
        },
        {
            "x": 8,
            "y": 5,
            "direction": "left"
        },
        {
            "x": 8,
            "y": 6,
            "direction": "left"
        }
    ]
}
const playerConfigs: PlayerConfig[] = [
    { x: 11, y: 4, isWhite: false },
    { x: 5, y: 2, isWhite: true },
]


const size = { gameTileWidth: 15, gameTileHeight: 7 };

export default class Level14 extends MainScene {
    constructor() {
        super('level14', size, tileMapConfig, playerConfigs)
    }
}