import {Component, OnInit} from '@angular/core';
import {Cell} from "../shared/model/cell";
import {Piece} from "../shared/model/piece";
import {King} from "../shared/model/pieces/king";
import {Queen} from "../shared/model/pieces/queen";
import {Rook} from "../shared/model/pieces/rook";
import {Knight} from "../shared/model/pieces/knight";
import {Bishop} from "../shared/model/pieces/bishop";
import {Pawn} from "../shared/model/pieces/pawn";
import {Undefined} from "../shared/model/pieces/undefined";
import {Game} from "../shared/model/game";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: Game;
  board: Cell[][];
  selectedPiece: Piece;

  constructor() {
  }

  ngOnInit() {
    this.board = [];
    this.game = new Game(this.board);
    this.selectedPiece = new Undefined();
    let notationY = [1, 2, 3, 4, 5, 6, 7, 8];
    let notationX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    let counter = 0;
    for (let y = 0; y < 8; y++) {
      counter++;
      this.board[y] = [];
      for (let x = 0; x < 8; x++) {
        this.board[y][x] = new Cell(x, Math.abs(y - 7), counter % 2 === 1 ? "burlywood" : "darkslategray",
                  counter % 2 === 1 ? "white" : "black", notationY[Math.abs(y - 7)] + notationX[x]);
        counter++;
      }
    }

    // load armies into these, just test data for now
    this.game.whitePlacementArmy = this.whiteTestArmy();
    this.game.blackPlacementArmy = this.blackTestArmy();
  }

  whiteTestArmy(): Piece[] {
    let pieces = [];
    pieces.push(new King("white"));
    // pieces.push(new Queen("white"));
    // pieces.push(new Rook("white"));
    // pieces.push(new Rook("white"));
    // pieces.push(new Knight("white"));
    // pieces.push(new Knight("white"));
    // pieces.push(new Bishop("white"));
    // pieces.push(new Bishop("white"));
    pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    return pieces;
  }

  blackTestArmy(): Piece[] {
    let pieces = [];
    pieces.push(new King("black"));
    // pieces.push(new Queen("black"));
    // pieces.push(new Rook("black"));
    // pieces.push(new Rook("black"));
    // pieces.push(new Knight("black"));
    // pieces.push(new Knight("black"));
    // pieces.push(new Bishop("black"));
    // pieces.push(new Bishop("black"));
    pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    return pieces;
  }
}
