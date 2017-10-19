import {Piece} from "../piece";
import {Pos} from "../pos";

export class King extends Piece {
  constructor(colour: string) {
    const image = colour === "white" ? "../../assets/pieces/white/256/white-king-256.png" :
      "../../assets/pieces/black/256/black-king-256.png";
    const svg = colour === "white" ? "../../assets/pieces/white/white-king-resource.svg" :
      "../../assets/pieces/black/black-king-resource.svg";
    const movement = [
      new Pos(1, 0), new Pos(0, 1), new Pos(-1, 0), new Pos(0, -1)
    ];
    super("king", colour, 1, 1, 1, image, svg, 6, movement);
  }
}
