import {Piece} from "../piece";
import {Pos} from "../pos";

export class Bishop extends Piece {
    constructor(colour: string) {
        const image = colour === "white" ? "../../assets/pieces/white/256/white-bishop-256.png" :
            "../../assets/pieces/black/256/black-bishop-256.png";
        const movement = [
            new Pos(1, 1), new Pos(2, 2), new Pos(3, 3), new Pos(4, 4), new Pos(5, 5), new Pos(6, 6), new Pos(7, 7), new Pos(8, 8),
            new Pos(1, -1), new Pos(2, -2), new Pos(3, -3), new Pos(4, -4), new Pos(5, -5), new Pos(6, -6), new Pos(7, -7), new Pos(8, -8),
            new Pos(-1, 1), new Pos(-2, 2), new Pos(-3, 3), new Pos(-4, 4), new Pos(-5, 5), new Pos(-6, 6), new Pos(-7, 7), new Pos(-8, 8),
            new Pos(-1, -1), new Pos(-2, -2), new Pos(-3, -3), new Pos(-4, -4), new Pos(-5, -5), new Pos(-6, -6), new Pos(-7, -7), new Pos(-8, -8)
        ];
        super("bishop", colour, 1, 1, 1, image, movement);
    }
}
