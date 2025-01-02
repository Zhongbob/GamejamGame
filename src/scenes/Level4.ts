import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'

const size = { gameTileWidth: 15, gameTileHeight: 15 };

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
    "colorWalls": [],
    "lava": [
        {
            "x": 4,
            "y": 1
        },
        {
            "x": 4,
            "y": 2
        },
        {
            "x": 4,
            "y": 3
        },
        {
            "x": 4,
            "y": 4
        },
        {
            "x": 4,
            "y": 5
        },
        {
            "x": 9,
            "y": 5
        },
        {
            "x": 4,
            "y": 6
        },
        {
            "x": 8,
            "y": 6
        },
        {
            "x": 7,
            "y": 7
        },
        {
            "x": 6,
            "y": 8
        },
        {
            "x": 5,
            "y": 9
        },
        {
            "x": 4,
            "y": 10
        },
        {
            "x": 8,
            "y": 10
        },
        {
            "x": 9,
            "y": 10
        },
        {
            "x": 10,
            "y": 10
        },
        {
            "x": 11,
            "y": 10
        },
        {
            "x": 12,
            "y": 10
        },
        {
            "x": 13,
            "y": 10
        },
        {
            "x": 3,
            "y": 11
        },
        {
            "x": 2,
            "y": 12
        },
        {
            "x": 1,
            "y": 13
        }
    ],
    "colorLava": []
};


const playerConfigs: PlayerConfig[] = [
    { x: 2, y: 2, isWhite: true },
    { x: 12, y: 12, isWhite: false }
]

export default class Level4 extends MainScene {
    constructor() {
        super('level4', size, tileMapConfig, playerConfigs)
    }
}

