import {Piece} from "../piece";

export class King extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-king-256.png" :
            "../../assets/pieces/black/256/black-king-256.png";
        super("king", colour, 1, 1, 1, image);
    }
}
