import {Component, OnInit} from '@angular/core';
import {Cell} from "../shared/model/cell";
import {Piece} from "../shared/model/piece";
import {King} from "../shared/model/pieces/king";
import {Pawn} from "../shared/model/pieces/pawn";
import {Game} from "../shared/model/game";
import {GameService} from "../shared/services/game.service";
import {Army} from "../shared/model/army";
import {Router} from "@angular/router";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: Game;
  board: Cell[][];

  constructor(private gameService: GameService, private userService: UserService) {}

  ngOnInit() {
    // check if game
    if (!this.gameService.gameStarted()) {
      // throw user back to main for now if game hasn't been initted. Do it better later
      // this.router.navigateByUrl("main");
      this.gameService.startGame(new Army("army1", 100, this.whiteTestArmy()),
              new Army("army2", 100, this.blackTestArmy()))
    }
    this.game = this.gameService.game;
    this.board = [];
    this.game.board = this.board;

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
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
    // pieces.push(new Pawn("white"));
      pieces[0].hitpoints = 2;
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
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
    // pieces.push(new Pawn("black"));
      pieces[0].hitpoints = 2;
    return pieces;
  }
}
