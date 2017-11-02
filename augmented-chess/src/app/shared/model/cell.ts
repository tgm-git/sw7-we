import {Piece} from "./piece";
import {Pos} from "./pos";

export class Cell {
  notation: string;
  pos: Pos;
  colour: string; // black / white
  backgroundColour: string;
  backgroundColourOriginal: string;
  piece: Piece;
  image = "";

  constructor(posX, posY, backgroundColour, colour, notation) {
    this.pos = new Pos(posX, posY);
    this.backgroundColour = backgroundColour;
    this.backgroundColourOriginal = backgroundColour;
    this.colour = colour;
    this.notation = notation;
  }
}
