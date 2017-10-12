import {Piece} from "../piece";

export class Knight extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/white-knight-resource.svg" :
            "../../assets/pieces/black/black-knight-resource.svg";
        super("knight", colour, 1, 1, 1, image);
    }
}
