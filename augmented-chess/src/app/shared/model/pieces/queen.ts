import {Piece} from "../piece";

export class Queen extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-queen-256.png" :
            "../../assets/pieces/black/256/black-queen-256.png";
        super("queen", colour, 1, 1, 1, image);
    }
}
