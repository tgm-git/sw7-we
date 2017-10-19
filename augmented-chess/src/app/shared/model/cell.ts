import {Piece} from "./piece";
import {Pos} from "./pos";

export class Cell {
  pos: Pos;
  backgroundColour: string;
  backgroundColourOriginal: string;
  piece: Piece;
  image = "";

  constructor(posX, posY, backgroundColour) {
    this.pos = new Pos(posX, posY);
    this.backgroundColour = backgroundColour;
    this.backgroundColourOriginal = backgroundColour;
  }
}
