import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const size = { gameTileWidth: 15, gameTileHeight: 7 };

const tileMapConfig: TileMapConfig = {
    "walls": [],
    "colorWalls": [
        {
            "x": 7,
            "y": 3,
            "isWhite": true
        }
    ],
    "lava": [],
    "colorLava": [
        {
            "x": 5,
            "y": 0,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 0,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 1,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 1,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 2,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 2,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 3,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 3,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 4,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 4,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 5,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 5,
            "isWhite": true
        },
        {
            "x": 5,
            "y": 6,
            "isWhite": false
        },
        {
            "x": 9,
            "y": 6,
            "isWhite": true
        }
    ]
}


const playerConfigs: PlayerConfig[] = [
    { x: 2, y: 3, isWhite: true },
    { x: 12, y: 3, isWhite: false }
]

export default class Level5 extends MainScene {
    constructor() {
        super('level5', size, tileMapConfig, playerConfigs)
    }
}

