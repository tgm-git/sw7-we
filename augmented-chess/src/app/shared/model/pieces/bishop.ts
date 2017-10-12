import {Piece} from "../piece";

export class Bishop extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/white-bishop-resource.svg" :
            "../../assets/pieces/black/black-bishop-resource.svg";
        super("bishop", colour, 1, 1, 1, image);
    }
}
