export default interface TileMapConfig {
    walls?: { x: number, y: number }[];
    colorWalls?: { x: number, y: number, isWhite: boolean }[];
    lava?: { x: number, y: number }[];
    colorLava?: { x: number, y: number, isWhite: boolean }[];
    swap?: { x: number, y: number }[];
    colorSwap?: { x: number, y: number, isWhite: boolean }[];
    arrow?: { x: number, y: number, direction: string }[];
    colorArrow?: { x: number, y: number, direction: string, isWhite: boolean }[];
}