import {Piece} from "./piece";

export class Army {
    name: string;
    bp: number;
    pieces: Piece[];

    constructor(name: string, bp: number, pieces: Piece[]) {
        this.name = name;
        this.bp = bp;
        this.pieces = pieces;
    }
}
