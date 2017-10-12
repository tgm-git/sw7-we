import {Piece} from "../piece";
import {Pos} from "../pos";

export class Rook extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-rook-256.png" :
            "../../assets/pieces/black/256/black-rook-256.png";
        const movement = [
            new Pos(1, 0), new Pos(2, 0), new Pos(3, 0), new Pos(4, 0), new Pos(5, 0), new Pos(6, 0), new Pos(7, 0), new Pos(8, 0),
            new Pos(-1, 0), new Pos(-2, 0), new Pos(-3, 0), new Pos(-4, 0), new Pos(-5, 0), new Pos(-6, 0), new Pos(-7, 0), new Pos(-8, 0),
            new Pos(0, 1), new Pos(0, 2), new Pos(0, 3), new Pos(0, 4), new Pos(0, 5), new Pos(0, 6), new Pos(0, 7), new Pos(0, 8),
            new Pos(0, -1), new Pos(0, -2), new Pos(0, -3), new Pos(0, -4), new Pos(0, -5), new Pos(0, -6), new Pos(0, -7), new Pos(0, -8)
        ];
        super("rook", colour, 1, 1, 1, image, movement);
    }
}
