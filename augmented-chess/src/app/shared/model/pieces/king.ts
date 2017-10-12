import {Piece} from "../piece";

export class King extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-king-256.png" :
            "../../assets/pieces/black/256/black-king-256.png";
        const svg = colour === "white" ? "../../assets/pieces/white/white-king-resource.svg" :
            "../../assets/pieces/black/black-king-resource.svg";
        super("King", colour, 1, 1, 1, image, svg, 6);
    }
}
