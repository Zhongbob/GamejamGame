import 'phaser'
import MainScene from '../scenes/MainScene'
import Tile from './Tile'
import Wall from './Wall'
import ColorWall from './ColorWall'
import ColorLava from './ColorLava'
import Lava from './Lava'
import Swap from './Swap'
import { settings } from '../globals'
import TileMapConfig from '../types/TileMapConfig'
import ColorSwap from './ColorSwap'


export default class TileMap {
    private scene: MainScene;
    public tiles: Tile[][];
    constructor(scene, tileMapConfig: TileMapConfig) {
        this.tiles = [];
        this.scene = scene;
        for (let y = 0; y<scene.gameTileHeight; y++) {
            let row = [];
            for (let x = 0; x<scene.gameTileWidth; x++) {
                row.push(null);
            }
            this.tiles.push(row);
        }
        if (tileMapConfig.walls) {
            for (let wall of tileMapConfig.walls) {
                this.tiles[wall.y][wall.x] = new Wall(scene, wall.x, wall.y, false);
            }
        }
        if (tileMapConfig.colorWalls){
            for (let wall of tileMapConfig.colorWalls) {
                this.tiles[wall.y][wall.x] = new ColorWall(scene, wall.x, wall.y, wall.isWhite);
            }
        }
        if (tileMapConfig.lava) {
            for (let lava of tileMapConfig.lava) {
                this.tiles[lava.y][lava.x] = new Lava(scene, lava.x, lava.y);
            }
        }
        if (tileMapConfig.colorLava){
            for (let lava of tileMapConfig.colorLava) {
                this.tiles[lava.y][lava.x] = new ColorLava(scene, lava.x, lava.y, lava.isWhite);
            }
        }

        if (tileMapConfig.swap){
            for (let swap of tileMapConfig.swap) {
                this.tiles[swap.y][swap.x] = new Swap(scene, swap.x, swap.y);
            }
        }
        if (tileMapConfig.colorSwap){
            for (let swap of tileMapConfig.colorSwap) {
                this.tiles[swap.y][swap.x] = new ColorSwap(scene, swap.x, swap.y, swap.isWhite);
            }
        }

    }

    
    getTile(x: number, y: number): Tile | null {
        if (x < 0 || y < 0 || x >= this.scene.gameTileWidth || y >= this.scene.gameTileHeight) {
            return null;
        }
        return this.tiles[y][x];
    }

    swapColor() {
        for (let row of this.tiles) {
            for (let tile of row) {
                if (tile !== null) {
                    tile.swapColor();
                }
            }
        }
    }

    deleteTile(x: number, y: number) {
        if (this.tiles[y][x] !== null) {
            this.tiles[y][x].destroy();
            this.tiles[y][x] = null;
        }
    }

    placeTile<T extends Tile>(x: number, y: number, TileType: new (...args: any[]) => T) {
        if (this.tiles[y][x] === null) {
            this.tiles[y][x] = new TileType(this.scene, x, y);
        }
        else if (!(this.tiles[y][x] instanceof TileType)) {
            this.tiles[y][x].destroy();
            this.tiles[y][x] = new TileType(this.scene, x, y);
        }
        else{
            if (this.tiles[y][x] instanceof ColorSwap){
                this.tiles[y][x].swapColor(false,true);
            }
            else{
                this.tiles[y][x].swapColor(false);6
            }
        }
    }
    
    printMap() {
        const tileMapConfig: TileMapConfig = {
            walls: [],
            colorWalls: [],
            lava: [],
            colorLava: [],
            swap: [],
            colorSwap: []
        }
        for (const row of this.tiles){
            for (const tile of row){
                if (tile instanceof Wall){
                    tileMapConfig.walls.push({x: tile.trueX, y: tile.trueY})
                }
                else if (tile instanceof ColorWall){
                    tileMapConfig.colorWalls.push({x: tile.trueX, y: tile.trueY, isWhite: tile.isWhite})
                }
                else if (tile instanceof Lava){
                    tileMapConfig.lava.push({x: tile.trueX, y: tile.trueY})
                }
                else if (tile instanceof ColorLava){
                    tileMapConfig.colorLava.push({x: tile.trueX, y: tile.trueY, isWhite: tile.isWhite})
                }
                else if (tile instanceof Swap){
                    tileMapConfig.swap.push({x: tile.trueX, y: tile.trueY})
                }
                else if (tile instanceof ColorSwap){
                    tileMapConfig.colorSwap.push({x: tile.trueX, y: tile.trueY, isWhite: tile.isWhite})
                }
            }
        }
        console.log(tileMapConfig)
    }

    undo(){
        for (const row of this.tiles){
            for (const tile of row){
                if (tile !== null){
                    tile.undo();
                }
            }
        }
    }
}