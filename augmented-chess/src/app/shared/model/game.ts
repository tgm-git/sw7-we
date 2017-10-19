import {Piece} from "./piece";
import {Pos} from "./pos";
import {Cell} from "./cell";

export class Game {
  phase = "setup"; // "setup" and "play"
  turn = "white";
  board: Cell[][];
  whitePlacementArmy: Piece[] = [];
  blackPlacementArmy: Piece[] = [];
  whiteArmy: Piece[] = [];
  blackArmy: Piece[] = [];

  moves: Cell[][] = [];
  lastMoveSrc: Cell;
  lastMoveDest: Cell;

  whiteStartingPos: Pos[] = [
    new Pos(0, 1), new Pos(1, 1), new Pos(2, 1), new Pos(3, 1), new Pos(4, 1), new Pos(5, 1), new Pos(6, 1), new Pos(7, 1),
    new Pos(0, 0), new Pos(1, 0), new Pos(2, 0), new Pos(3, 0), new Pos(4, 0), new Pos(5, 0), new Pos(6, 0), new Pos(7, 0),
  ];
  blackStartingPos: Pos[] = [
    new Pos(0, 7), new Pos(1, 7), new Pos(2, 7), new Pos(3, 7), new Pos(4, 7), new Pos(5, 7), new Pos(6, 7), new Pos(7, 7),
    new Pos(0, 6), new Pos(1, 6), new Pos(2, 6), new Pos(3, 6), new Pos(4, 6), new Pos(5, 6), new Pos(6, 6), new Pos(7, 6)
  ];

  constructor(board: Cell[][]) {
    this.board = board;
  }

  changeTurn() {
    this.turn = this.turn === "white" ? "black" : "white";
  }

  checkSetupDone() {
    if (this.whitePlacementArmy.length === 0 && this.blackPlacementArmy.length === 0) {
      this.phase = "play";
      this.turn = "white";
    }
  }

  checkValidSetupPos(colour: string, pos: Pos): boolean {
    if (colour === "white") {
      return !!this.whiteStartingPos.find(p => p.equal(pos));
    }
    return !!this.blackStartingPos.find(p => p.equal(pos));
  }

  checkValidMove(src: Cell, dest: Cell): boolean {
    let piece = src.piece;

    if (dest.piece && dest.piece.colour === piece.colour) {
      return false;
    }

    let movePos = src.pos.relative(dest.pos);
    if (piece.movement.find(p => p.equal(movePos))) {
      // todo: see if blocked (if not knight)
      return true;
    }

    return false;
  }

  saveMove(src: Cell, dest: Cell): void {
    if (this.lastMoveSrc) {
      this.moves.push(Object.assign({},[this.lastMoveSrc, this.lastMoveDest]));

      this.lastMoveSrc.backgroundColour = this.lastMoveSrc.backgroundColourOriginal;
      this.lastMoveDest.backgroundColour = this.lastMoveDest.backgroundColourOriginal;
    }

    this.lastMoveSrc = src;
    this.lastMoveDest = dest;
    this.lastMoveSrc.backgroundColour = "limegreen";
    this.lastMoveDest.backgroundColour = "greenyellow";
  }
}
