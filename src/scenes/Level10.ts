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
        },
        {
            "x": 0,
            "y": 7
        },
        {
            "x": 14,
            "y": 7
        },
        {
            "x": 0,
            "y": 8
        },
        {
            "x": 14,
            "y": 8
        },
        {
            "x": 0,
            "y": 9
        },
        {
            "x": 14,
            "y": 9
        },
        {
            "x": 0,
            "y": 10
        },
        {
            "x": 14,
            "y": 10
        },
        {
            "x": 0,
            "y": 11
        },
        {
            "x": 14,
            "y": 11
        },
        {
            "x": 0,
            "y": 12
        },
        {
            "x": 14,
            "y": 12
        },
        {
            "x": 0,
            "y": 13
        },
        {
            "x": 14,
            "y": 13
        },
        {
            "x": 0,
            "y": 14
        },
        {
            "x": 1,
            "y": 14
        },
        {
            "x": 2,
            "y": 14
        },
        {
            "x": 3,
            "y": 14
        },
        {
            "x": 4,
            "y": 14
        },
        {
            "x": 5,
            "y": 14
        },
        {
            "x": 6,
            "y": 14
        },
        {
            "x": 7,
            "y": 14
        },
        {
            "x": 8,
            "y": 14
        },
        {
            "x": 9,
            "y": 14
        },
        {
            "x": 10,
            "y": 14
        },
        {
            "x": 11,
            "y": 14
        },
        {
            "x": 12,
            "y": 14
        },
        {
            "x": 13,
            "y": 14
        },
        {
            "x": 14,
            "y": 14
        }
    ],
    "colorWalls": [
        {
            "x": 7,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 7,
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
            "x": 6,
            "y": 6,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 6,
            "isWhite": false
        },
        {
            "x": 8,
            "y": 6,
            "isWhite": false
        },
        {
            "x": 1,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 2,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 3,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 4,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 5,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 6,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 8,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 10,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 11,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 12,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 13,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 6,
            "y": 8,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 8,
            "isWhite": false
        },
        {
            "x": 8,
            "y": 8,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 9,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 10,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 11,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 12,
            "isWhite": false
        },
        {
            "x": 7,
            "y": 13,
            "isWhite": false
        }
    ],
    "lava": [],
    "colorLava": [],
    "swap": [
        {
            "x": 7,
            "y": 7
        }
    ]
}

const playerConfigs: PlayerConfig[] = [
    { x: 3, y: 3, isWhite: false },
    { x: 3, y: 11, isWhite: true },
    { x: 11, y: 11, isWhite: false },
    { x: 11, y: 3, isWhite: true },
]


const size = { gameTileWidth: 15, gameTileHeight: 15 };

export default class Level10 extends MainScene {
    constructor() {
        super('level10', size, tileMapConfig, playerConfigs)
    }
}