import {Piece} from "../piece";

export class Knight extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-knight-256.png" :
            "../../assets/pieces/black/256/black-knight-256.png";
        const svg = colour === "white" ? "../../assets/pieces/white/white-knight-resource.svg" :
            "../../assets/pieces/black/black-knight-resource.svg";
        super("knight", colour, 1, 1, 1, image, svg);
    }
}
