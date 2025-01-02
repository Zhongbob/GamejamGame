import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = {
    "walls": [],
    "colorWalls": [
        {
            "x": 1,
            "y": 3,
            "isWhite": true
        },
        {
            "x": 3,
            "y": 3,
            "isWhite": false
        }
    ],
    "lava": [
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
        }
    ],
    "colorLava": [
        {
            "x": 0,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 1,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 2,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 3,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 4,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 0,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 1,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 2,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 3,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 4,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 5,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 0,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 4,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 5,
            "y": 2,
            "isWhite": true
        },
        {
            "x": 0,
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
            "isWhite": true
        },
        {
            "x": 0,
            "y": 4,
            "isWhite": false
        },
        {
            "x": 4,
            "y": 4,
            "isWhite": false
        },
        {
            "x": 5,
            "y": 4,
            "isWhite": true
        },
        {
            "x": 0,
            "y": 5,
            "isWhite": false
        },
        {
            "x": 1,
            "y": 5,
            "isWhite": false
        },
        {
            "x": 2,
            "y": 5,
            "isWhite": false
        },
        {
            "x": 3,
            "y": 5,
            "isWhite": false
        },
        {
            "x": 4,
            "y": 5,
            "isWhite": false
        },
        {
            "x": 5,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 0,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 1,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 2,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 3,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 4,
            "y": 6,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 6,
            "isWhite": true
        }
    ]
};

const playerConfigs: PlayerConfig[] = [
    { x: 2, y: 3, isWhite: false },
    { x: 12, y: 3, isWhite: true }
]


const size = { gameTileWidth: 15, gameTileHeight: 7 };

export default class Level7 extends MainScene {
    constructor() {
        super('level7', size, tileMapConfig, playerConfigs)
    }
}