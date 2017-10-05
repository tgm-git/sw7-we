import {Piece} from "../piece";

export class Bishop extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-bishop-256.png" :
            "../../assets/pieces/black/256/black-bishop-256.png";
        const svg = colour === "white" ? "../../assets/pieces/white/white-bishop-resource.svg" :
            "../../assets/pieces/black/black-bishop-resource.svg";
        super("bishop", colour, 1, 1, 1, image, svg);
    }
}
