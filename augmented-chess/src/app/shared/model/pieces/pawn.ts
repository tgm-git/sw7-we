import {Piece} from "../piece";

export class Pawn extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-pawn-256.png" :
            "../../assets/pieces/black/256/black-pawn-256.png";
        super("pawn", colour, 1, 1, 1, image);
    }
}
