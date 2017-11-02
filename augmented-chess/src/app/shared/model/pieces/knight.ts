import {Piece} from "../piece";
import {Pos} from "../pos";

export class Knight extends Piece {
  constructor(colour: string) {
    const image = colour === "white" ? "../../assets/pieces/white/256/white-knight-256.png" :
      "../../assets/pieces/black/256/black-knight-256.png";
    const svg = colour === "white" ? "../../assets/pieces/white/white-knight-resource.svg" :
      "../../assets/pieces/black/black-knight-resource.svg";
    const movement = [
      new Pos(2, 1), new Pos(1, 2), new Pos(-1, 2), new Pos(-2, 1),
      new Pos(-2, -1), new Pos(-1, -2), new Pos(1, -2), new Pos(2, -1)
    ];
    super("knight", colour, 2, 1, 1, image, svg, 3, movement);
  }
}
