import {Piece} from "../piece";
import {Pos} from "../pos";

export class Pawn extends Piece {
  firstMove: boolean;

  constructor(colour: string, piece?: Piece) {
    let imageWhite = "../../assets/pieces/white/256/white-pawn-256.png";
    let imageBlack = "../../assets/pieces/black/256/black-pawn-256.png";
    const image = colour === "white" ? imageWhite : imageBlack;
    const svg = colour === "white" ? "../../assets/pieces/white/white-pawn-resource.svg" :
      "../../assets/pieces/black/black-pawn-resource.svg";
    const movement = colour === "white" ? [new Pos(0, 1)] : [new Pos(0, -1)];

    if (piece) {
      super(piece.name, piece.colour, piece.mp, piece.hitpoints, piece.attack, image, imageWhite, imageBlack, svg, piece.bp, Piece.constructMovement(piece.movement));
    } else {
      super("pawn", colour, 1, 1, 1, image, imageWhite, imageBlack, svg, 1, movement);
    }

    this.firstMove = true;
  }

  calculateMovement () {
    this.movement = [];
    if (this.colour === "white") {
      for (let i = 1; i <= this.mp; i++) {
        this.movement.push(new Pos(0, i));
      }
    } else {
      for (let i = 1; i <= this.mp; i++) {
        this.movement.push(new Pos(0, i * -1));
      }
    }
  }
}
