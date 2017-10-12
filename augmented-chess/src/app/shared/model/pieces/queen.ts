import {Piece} from "../piece";

export class Queen extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/white-queen-resource.svg" :
            "../../assets/pieces/black/black-queen-resource.svg";
        super("queen", colour, 1, 1, 1, image);
    }
}
