import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const tileMapConfig: TileMapConfig = {
    "walls": [],
    "colorWalls": [
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
            "x": 0,
            "y": 10,
            "isWhite": false
        },
        {
            "x": 1,
            "y": 10,
            "isWhite": false
        },
        {
            "x": 2,
            "y": 10,
            "isWhite": false
        },
        {
            "x": 0,
            "y": 14,
            "isWhite": true
        },
        {
            "x": 1,
            "y": 14,
            "isWhite": true
        },
        {
            "x": 2,
            "y": 14,
            "isWhite": true
        }
    ],
    "lava": [],
    "colorLava": [],
    "swap": [],
    "colorSwap": [
        {
            "x": 0,
            "y": 4,
            "isWhite": false
        },
        {
            "x": 1,
            "y": 4,
            "isWhite": false
        },
        {
            "x": 2,
            "y": 4,
            "isWhite": false
        },
        {
            "x": 0,
            "y": 11,
            "isWhite": false
        },
        {
            "x": 1,
            "y": 11,
            "isWhite": false
        },
        {
            "x": 2,
            "y": 11,
            "isWhite": false
        }
    ]
}

const playerConfigs: PlayerConfig[] = [
    { x: 1, y: 6, isWhite: false },
    { x: 0, y: 1, isWhite: true },
    { x: 2, y: 12, isWhite: true },
]


const size = { gameTileWidth: 3, gameTileHeight: 15 };

export default class Level12 extends MainScene {
    constructor() {
        super('level12', size, tileMapConfig, playerConfigs)
    }
}