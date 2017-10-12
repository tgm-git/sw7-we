import {Piece} from "../piece";

export class Rook extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/white-rook-resource.svg" :
            "../../assets/pieces/black/black-rook-resource.svg";
        super("rook", colour, 1, 1, 1, image);
    }
}
