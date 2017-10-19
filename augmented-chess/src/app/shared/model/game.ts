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

    if (dest.piece && (dest.piece.colour === piece.colour || piece.name === "pawn")) {
      return false;
    }

    let movePos = src.pos.relative(dest.pos);
    if (piece.movement.find(p => p.equal(movePos))) {
      if (piece.name === "knight") {
        return true;
      }

      // determine if any pieces are blocking the move
      let cellsBetween: Cell[] = this.findCellsBetween(src.pos, movePos);
      for (let cell of cellsBetween) {
        if (cell.piece) {
          return false;
        }
      }

      return true;
    } else if (piece.name === "pawn") {
      if (piece.colour === "white" && (movePos.equal(new Pos(-1, 1)) || movePos.equal(new Pos(1, 1))) ||
              piece.colour === "black" && (movePos.equal(new Pos(-1, -1)) || movePos.equal(new Pos(1, -1)))) {
        let absPos = src.pos.absolute(movePos);
        let cellUnderAttack = this.findCellByPosition(absPos);
        if (cellUnderAttack.piece && cellUnderAttack.piece.colour !== piece.colour) {
          return true;
        }
      }
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
    this.lastMoveSrc.backgroundColour = this.lastMoveSrc.colour === "white" ? "greenyellow" : "darkolivegreen";
    this.lastMoveDest.backgroundColour = this.lastMoveDest.colour === "white" ? "greenyellow" : "darkolivegreen";
  }

  findCellByPosition(pos: Pos): Cell {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        let cell = this.board[i][j];
        if (cell.pos.equal(pos)) {
          return cell;
        }
      }
    }
    throw new Error("Cell not found");
  }

  private findCellsBetween(srcPos: Pos, movePos: Pos): Cell[] {
    let cellsBetween: Cell[] = [];
    let posX = movePos.x;
    let posY = movePos.y;
    while (true) {
      if (posX != 0) {
        posX = posX < 0 ? posX + 1 : posX - 1;
      }
      if (posY != 0) {
        posY = posY < 0 ? posY + 1 : posY - 1;
      }
      if (posX === 0 && posY === 0) {
        break;
      }
      cellsBetween.push(this.findCellByPosition(srcPos.absolute(new  Pos(posX, posY))));
    }
    return cellsBetween;
  }

  checkWinCondition (){
    if (!this.blackArmy.some(p => p.name === "king")) {
      this.gameOver("white");
    } else if (!this.whiteArmy.some(p => p.name === "king")) {
      this.gameOver("black");
    }
  }

  gameOver(winner: string) {
    setTimeout(() => {
      alert("Game over! Winner is " + winner + "!")
    }, 5);
    this.phase = "done";
    // todo: save game state etc
  }
}
