import {Piece} from "../piece";

export class Rook extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-rook-256.png" :
            "../../assets/pieces/black/256/black-rook-256.png";
        super("rook", colour, 1, 1, 1, image);
    }
}
