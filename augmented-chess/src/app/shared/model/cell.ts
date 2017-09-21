import {Piece} from "./piece";

export class Cell {
    posX: number;
    posY: number;
    backgroundColour: string;
    piece: Piece;

    constructor(posX, posY, backgroundColour, piece) {
        this.posX = posX;
        this.posY = posY;
        this.backgroundColour = backgroundColour;
        this.piece = piece;
    }
}
