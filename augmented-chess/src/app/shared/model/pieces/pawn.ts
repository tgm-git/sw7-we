import {Piece} from "../piece";

export class Pawn extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/white-pawn-resource.svg" :
            "../../assets/pieces/black/black-pawn-resource.svg";
        super("pawn", colour, 1, 1, 1, image);
    }
}
