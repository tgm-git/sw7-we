import {Piece} from "../piece";

export class King extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/white-king-resource.svg" :
            "../../assets/pieces/black/black-king-resource.svg";
        super("king", colour, 1, 1, 1, image);
    }
}
