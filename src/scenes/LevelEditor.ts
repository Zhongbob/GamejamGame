import 'phaser'
import MainScene from './MainScene'
import TileMapConfig from '../types/TileMapConfig'
import PlayerConfig from '../types/PlayerConfig'
import Wall from '../objects/Wall'
import ColorWall from '../objects/ColorWall'
import ColorLava from '../objects/ColorLava'
import ColorSwap from '../objects/ColorSwap'
import Lava from '../objects/Lava'
import Swap from '../objects/Swap'
import { settings } from '../globals'
const tileMapConfig: TileMapConfig = {
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
        },
        {
            "x": 10,
            "y": 6
        },
        {
            "x": 11,
            "y": 6
        },
        {
            "x": 12,
            "y": 6
        },
        {
            "x": 13,
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
            "x": 0,
            "y": 8
        },
        {
            "x": 7,
            "y": 8
        },
        {
            "x": 8,
            "y": 8
        },
        {
            "x": 9,
            "y": 8
        },
        {
            "x": 10,
            "y": 8
        },
        {
            "x": 11,
            "y": 8
        },
        {
            "x": 12,
            "y": 8
        },
        {
            "x": 13,
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
            "x": 0,
            "y": 10
        },
        {
            "x": 0,
            "y": 11
        },
        {
            "x": 0,
            "y": 12
        },
        {
            "x": 0,
            "y": 13
        },
        {
            "x": 0,
            "y": 14
        }
    ],
    "colorWalls": [
        {
            "x": 9,
            "y": 7,
            "isWhite": false
        },
        {
            "x": 11,
            "y": 7,
            "isWhite": false
        }
    ],
    "lava": [
        {
            "x": 6,
            "y": 6
        },
        {
            "x": 6,
            "y": 8
        }
    ],
    "colorLava": [],
    "swap": [],
    "colorSwap": [
        {
            "x": 12,
            "y": 7,
            "isWhite": true
        },
        {
            "x": 14,
            "y": 7,
            "isWhite": false
        }
    ]
}

const playerConfigs: PlayerConfig[] = [
    { x: 12, y: 7, isWhite: false },
    { x: 1, y: 1, isWhite: false },
    { x: 2, y: 12, isWhite: false },
    { x: 3, y: 7, isWhite: false },
]


const size = { gameTileWidth: 15, gameTileHeight: 15 };
export default class LevelEditor extends MainScene {
    private currentTile: number = 0;
    private delete: boolean = true;
    private tileTypes = [Wall, ColorWall, Lava, ColorLava, Swap, ColorSwap]
    constructor() {
        super('LevelEditor', size, tileMapConfig, playerConfigs);
    }

    create() {
        super.create();
        this.input.keyboard.on('keydown', (event: KeyboardEvent) => {
            console.log(event.key)
            switch (event.key) {
                case '1':
                    this.currentTile = 0;
                    this.delete = false;
                    break;
                case '2':
                    this.currentTile = 1;
                    this.delete = false;
                    break;
                case '3':
                    this.currentTile = 2;
                    this.delete = false;
                    break;
                case '4':
                    this.currentTile = 3;
                    this.delete = false;
                    break;
                case '5':
                    this.currentTile = 4;
                    this.delete = false;
                    break;
                case '6':
                    this.currentTile = 5;
                    this.delete = false;
                    break;
                case 'q':
                    this.delete = true
                    break;
                case 'p':
                    this.tilemap.printMap()
                    break;

            }
        });
        this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
            const [x,y] = [pointer.x-this.offsetX, pointer.y-this.offsetY]
            const [tileX, tileY] = [Math.floor(x / settings.gridSize), Math.floor(y / settings.gridSize)]
            if (tileX < 0 || tileX >= size.gameTileWidth || tileY < 0 || tileY >= size.gameTileHeight) return;
            if (this.delete) {
                this.tilemap.deleteTile(tileX, tileY)
            } else {
                this.tilemap.placeTile(tileX, tileY, this.tileTypes[this.currentTile])
            }
            
        })
    }

    lose() {
        this.tilemap.printMap()
        super.lose();
    }
}