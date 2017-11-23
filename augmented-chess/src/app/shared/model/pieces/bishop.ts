import {Piece} from "../piece";
import {Pos} from "../pos";

export class Bishop extends Piece {
  constructor(colour: string, piece?: Piece) {
    let imageWhite = "../../assets/pieces/white/256/white-bishop-256.png";
    let imageBlack = "../../assets/pieces/black/256/black-bishop-256.png";
    const image = colour === "white" ? imageWhite : imageBlack;
    const svg = colour === "white" ? "../../assets/pieces/white/white-bishop-resource.svg" :
      "../../assets/pieces/black/black-bishop-resource.svg";
    const movement = [
      new Pos(1, 1), new Pos(2, 2), new Pos(3, 3), new Pos(4, 4), new Pos(5, 5), new Pos(6, 6), new Pos(7, 7),
      new Pos(1, -1), new Pos(2, -2), new Pos(3, -3), new Pos(4, -4), new Pos(5, -5), new Pos(6, -6), new Pos(7, -7),
      new Pos(-1, 1), new Pos(-2, 2), new Pos(-3, 3), new Pos(-4, 4), new Pos(-5, 5), new Pos(-6, 6), new Pos(-7, 7),
      new Pos(-1, -1), new Pos(-2, -2), new Pos(-3, -3), new Pos(-4, -4), new Pos(-5, -5), new Pos(-6, -6), new Pos(-7, -7)
    ];
    if (piece) {
      super(piece.name, piece.colour, piece.mp, piece.hitpoints, piece.attack, image, imageWhite, imageBlack, svg, piece.bp, piece.movement);
    } else {
      super("bishop", colour, 7, 1, 1, image, imageWhite, imageBlack, svg, 3, movement);
    }
  }
}
