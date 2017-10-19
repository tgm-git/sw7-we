import {Piece} from "./piece";
import {Pos} from "./pos";

export class Cell {
  notation: string;
  pos: Pos;
  backgroundColour: string;
  backgroundColourOriginal: string;
  piece: Piece;
  image = "";

  constructor(posX, posY, backgroundColour, notation) {
    this.pos = new Pos(posX, posY);
    this.backgroundColour = backgroundColour;
    this.backgroundColourOriginal = backgroundColour;
    this.notation = notation;
  }
}
