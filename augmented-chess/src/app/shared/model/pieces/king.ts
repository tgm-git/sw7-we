import {Piece} from "../piece";
import {Pos} from "../pos";

export class King extends Piece {
  constructor(colour: string, piece?: Piece) {
    let imageWhite = "../../assets/pieces/white/256/white-king-256.png";
    let imageBlack = "../../assets/pieces/black/256/black-king-256.png";
    const image = colour === "white" ? imageWhite : imageBlack;
    const svg = colour === "white" ? "../../assets/pieces/white/white-king-resource.svg" :
      "../../assets/pieces/black/black-king-resource.svg";
    const movement = [
      new Pos(1, 0), new Pos(0, 1), new Pos(-1, 0), new Pos(0, -1),
      new Pos(1, 1), new Pos(1, -1), new Pos(-1, -1), new Pos(-1, 1)
    ];
    if (piece) {
      super(piece.name, piece.colour, piece.mp, piece.hitpoints, piece.attack, image, imageWhite, imageBlack, svg, piece.bp, piece.movement);
    } else {
      super("king", colour, 1, 1, 1, image, imageWhite, imageBlack, svg, 6, movement);
    }
  }
}
