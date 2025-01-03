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
import Arrow from '../objects/Arrow'
import ColorArrow from '../objects/ColorArrow'
import { settings } from '../globals'
const tileMapConfig: TileMapConfig ={
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

export default class LevelEditor extends MainScene {
    private currentTile: number = 0;
    private delete: boolean = true;
    private tileTypes = [Wall, ColorWall, Lava, ColorLava, Swap, ColorSwap,Arrow,ColorArrow]
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
                case '7':
                    this.currentTile = 6;
                    this.delete = false;
                    break;
                case '8':
                    this.currentTile = 7;
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