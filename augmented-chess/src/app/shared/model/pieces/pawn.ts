import {Piece} from "../piece";
import {Pos} from "../pos";

export class Pawn extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-pawn-256.png" :
            "../../assets/pieces/black/256/black-pawn-256.png";
        const movement = [
            new Pos(0, 1)
        ];
        super("pawn", colour, 1, 1, 1, image, movement);
    }
}
