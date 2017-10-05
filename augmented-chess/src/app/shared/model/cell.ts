import {Piece} from "./piece";

export class Cell {
    posX: number;
    posY: number;
    backgroundColour: string;

    constructor(posX, posY, backgroundColour) {
        this.posX = posX;
        this.posY = posY;
        this.backgroundColour = backgroundColour;
    }
}
