import {Piece} from "../piece";
import {Pos} from "../pos";

export class Rook extends Piece {
  constructor(colour: string, piece?: Piece) {
    let imageWhite = "../../assets/pieces/white/256/white-rook-256.png";
    let imageBlack = "../../assets/pieces/black/256/black-rook-256.png";
    const image = colour === "white" ? imageWhite : imageBlack;
    const svg = colour === "white" ? "../../assets/pieces/white/white-rook-resource.svg" :
      "../../assets/pieces/black/black-rook-resource.svg";
    const movement = [
      new Pos(1, 0), new Pos(2, 0), new Pos(3, 0), new Pos(4, 0), new Pos(5, 0), new Pos(6, 0), new Pos(7, 0),
      new Pos(-1, 0), new Pos(-2, 0), new Pos(-3, 0), new Pos(-4, 0), new Pos(-5, 0), new Pos(-6, 0), new Pos(-7, 0),
      new Pos(0, 1), new Pos(0, 2), new Pos(0, 3), new Pos(0, 4), new Pos(0, 5), new Pos(0, 6), new Pos(0, 7),
      new Pos(0, -1), new Pos(0, -2), new Pos(0, -3), new Pos(0, -4), new Pos(0, -5), new Pos(0, -6), new Pos(0, -7)
    ];

    if (piece) {
      super(piece.name, piece.colour, piece.mp, piece.hitpoints, piece.attack, image, imageWhite, imageBlack, svg, piece.bp, Piece.constructMovement(piece.movement));
    } else {
      super("rook", colour, 7, 1, 1, image, imageWhite, imageBlack, svg, 3, movement);
    }
  }
}
