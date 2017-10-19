import {Piece} from "../piece";

export class Rook extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-rook-256.png" :
            "../../assets/pieces/black/256/black-rook-256.png";
        const svg = colour === "white" ? "../../assets/pieces/white/white-rook-resource.svg" :
            "../../assets/pieces/black/black-rook-resource.svg";
        super("Rook", colour, 7, 1, 1, image, svg, 3);
    }
}
