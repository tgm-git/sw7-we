import {Component, OnInit} from '@angular/core';
import {Cell} from "../shared/model/cell";
import {Army} from "../shared/model/army";
import {Piece} from "../shared/model/piece";
import {Bishop} from "../shared/model/pieces/bishop";
import {King} from "../shared/model/pieces/king";
import {Pawn} from "../shared/model/pieces/pawn";
import {Queen} from "../shared/model/pieces/queen";
import {Knight} from "../shared/model/pieces/knight";
import {Rook} from "../shared/model/pieces/rook";
import {forEach} from "@angular/router/src/utils/collection";
import {Undefined} from "../shared/model/pieces/undefined";
import {Pos} from "../shared/model/pos";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  armies: Army[] = [
    {
      name: "Army 1", bp: 37, pieces: new Array<Piece>(new King("black"), new Queen("black"),
      new Bishop("black"), new Bishop("black"),
      new Knight("black"), new Knight("black"),
      new Rook("black"), new Rook("black"),
      new Pawn("black"), new Pawn("black"),
      new Pawn("black"), new Pawn("black"),
      new Pawn("black"), new Pawn("black"),
      new Pawn("black"), new Pawn("black"))
    },
    {name: "Army 2", bp: 0, pieces: new Array<Piece>()},
    {name: "Army 3", bp: 0, pieces: new Array<Piece>()},
    {name: "Army 4", bp: 0, pieces: new Array<Piece>()}
  ];
  selectedArmy: Army;
  armyBeingEdited: Army;
  pieceEditList: Piece[] = [new Undefined()];
  tempbp = 0;
  black = "black";
  miniBoard: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  constructor() {
    this.selectedArmy = this.armies.length === 0 ? new Army("No army selected", 0, new Array<Piece>()) : this.armies[0];
    this.armyBeingEdited = Object.assign({}, this.selectedArmy);
  }

  ngOnInit() {
  }

  createArmy() {
    this.armies.push({name: "Army " + (this.armies.length + 1).toString(), bp: 0, pieces: new Array<Piece>()});
    this.selectArmy(this.armies[this.armies.length - 1]);
  }

  deleteArmy(a: Army) {
    if (this.armies.indexOf(a) !== -1) {
      this.armies.splice(this.armies.indexOf(a), 1);
      this.selectedArmy = new Army("No army selected", 0, new Array<Piece>());
    }
  }

  saveArmy(a: Army) {
    this.selectedArmy.name = a.name;
    for (let i = 0; i < a.pieces.length; i++) {
      let piece = a.pieces[i];
      this.tempbp = this.tempbp + piece.bp;
    }
    this.selectedArmy.bp = this.tempbp;
    a.bp = this.tempbp;
    this.tempbp = 0;
    this.selectedArmy.pieces = a.pieces;
  }

  selectArmy(a: Army) {
    this.selectedArmy = a;
    this.armyBeingEdited = Object.assign({}, this.selectedArmy);
    this.closePieceEdit();
  }

  addPiece(t: string) {
    switch (t) {
      case "King":
        this.armyBeingEdited.pieces.push(new King("black"));
        break;
      case "Queen":
        this.armyBeingEdited.pieces.push(new Queen("black"));
        break;
      case "Knight":
        this.armyBeingEdited.pieces.push(new Knight("black"));
        break;
      case "Bishop":
        this.armyBeingEdited.pieces.push(new Bishop("black"));
        break;
      case "Rook":
        this.armyBeingEdited.pieces.push(new Rook("black"));
        break;
      case "Pawn":
        this.armyBeingEdited.pieces.push(new Pawn("black"));
        break;
    }
  }



  openPieceEdit(p: Piece) {
    this.pieceEditList.push(p);
    this.resetMiniBoard();
    this.miniBoard[3][4] = 2;
    this.reDrawMiniBoard(p);
    this.pieceEditList.splice(0, 1);
  }

  closePieceEdit() {
    this.pieceEditList.push(new Undefined());
    this.resetMiniBoard();
    this.pieceEditList.splice(0, 1);
  }

  reDrawMiniBoard(p: Piece) {
    this.resetMiniBoard();
    this.miniBoard[3][4] = 2;
    for (let i = 0; i < p.movement.length; i++) {
      if (3 + p.movement[i].x < 8 && 3 + p.movement[i].x >= 0 &&
        4 + p.movement[i].y < 8 && 4 + p.movement[i].y >= 0) {
        this.miniBoard[3 + p.movement[i].x][4 + p.movement[i].y] = 1;
      }
    }
  }

  resetMiniBoard() {
    this.miniBoard = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ];
  }

  deletePiece(p: Piece) {
    if (this.armyBeingEdited.pieces.indexOf(p) !== -1) {
      this.armyBeingEdited.pieces.splice(this.armyBeingEdited.pieces.indexOf(p), 1);
    }
    this.closePieceEdit();
  }

  addHpToPiece(p: Piece, amount: number) {
    if ((p.hitpoints + amount > 0 && p.bp > 1) || p.bp < 2 && amount === 1) {
      p.bp += 2 * amount;
      p.hitpoints += amount;
    }
  }

  addAtToPiece(p: Piece, amount: number) {
    if ((p.attack + amount > 0 && p.bp > 0) || p.bp < 1 && amount === 1) {
      p.bp += amount;
      p.attack += amount;
    }
  }

  extendMove(p: Piece, amount: number) {
    let longestMove = 0;
    if (p.movement.length > 0) {
      for (let i = 0; i < p.movement.length; i++) {
        if (Math.abs(p.movement[i].x) > longestMove) {
          longestMove = Math.abs(p.movement[i].x);
        }
        if (Math.abs(p.movement[i].y) > longestMove) {
          longestMove = Math.abs(p.movement[i].y);
        }
      }
      if ((longestMove < 7 && longestMove > 0) ||
          (longestMove > 0 && amount === -1)) {
        for (let i = 0; i < p.movement.length; i++) {
          if (p.name === "knight" && i > 7 && amount === 1) {
            break;
          }
          if (Math.abs(p.movement[i].x) === longestMove || Math.abs(p.movement[i].y) === longestMove) {
            if (amount === 1) {
              if (p.movement[i].x === 0) {
                if (p.movement[i].y > 0) {
                  p.movement.push(new Pos(0, p.movement[i].y + 1));
                } else {
                  p.movement.push(new Pos(0, p.movement[i].y - 1));
                }
              } else if (p.movement[i].y === 0) {
                if (p.movement[i].x > 0) {
                  p.movement.push(new Pos(p.movement[i].x + 1, 0));
                } else {
                  p.movement.push(new Pos(p.movement[i].x - 1, 0));
                }
              } else if (p.movement[i].x > 0 && p.movement[i].y > 0) {
                p.movement.push(new Pos(p.movement[i].x + 1, p.movement[i].y + 1));
              } else if (p.movement[i].x > 0 && p.movement[i].y < 0) {
                p.movement.push(new Pos(p.movement[i].x + 1, p.movement[i].y - 1));
              } else if (p.movement[i].x < 0 && p.movement[i].y > 0) {
                p.movement.push(new Pos(p.movement[i].x - 1, p.movement[i].y + 1));
              } else if (p.movement[i].x < 0 && p.movement[i].y < 0) {
                p.movement.push(new Pos(p.movement[i].x - 1, p.movement[i].y - 1));
              }
            }
            if (amount === -1 && p.bp > 0) {
              p.movement.splice(i--, 1);
            }
          }
        }
        this.updateKnightMovement(p, longestMove, amount);
        if (p.bp > 0 || (p.bp === 0 && longestMove > 0 && amount === 1)) {
          p.bp += amount;
          p.moveppoints += amount;
          if (p.name === "knight" && amount === -1 && longestMove === 2) {
            p.moveppoints += amount;
          }
        }
      }
    }
    if (longestMove === 0 && amount === 1) {
      if (p.name === "pawn") {
        p.movement.push(new Pos(0, -1));
      } else if (p.name === "knight") {
        p.movement.push(new Pos(2, 1), new Pos(1, 2), new Pos(-1, 2), new Pos(-2, 1),
                        new Pos(-2, -1), new Pos(-1, -2), new Pos(1, -2), new Pos(2, -1));
        p.moveppoints += amount;
      } else if (p.name === "king") {
        p.movement.push(new Pos(1, 0), new Pos(0, 1), new Pos(-1, 0), new Pos(0, -1));
      } else if (p.name === "queen") {
        p.movement.push(new Pos(0, 1), new Pos(1, 0), new Pos(-1, 0), new Pos(0, -1),
                        new Pos(1, 1), new Pos(-1, 1), new Pos(1, -1), new Pos(-1, -1));
      } else if (p.name === "rook") {
        p.movement.push(new Pos(0, 1), new Pos(1, 0), new Pos(-1, 0), new Pos(0, -1));
      } else if (p.name === "bishop") {
        p.movement.push(new Pos(1, 1), new Pos(-1, 1), new Pos(1, -1), new Pos(-1, -1));
      }
      p.bp += amount;
      p.moveppoints += amount;
    }
    this.reDrawMiniBoard(p);
  }

  updateKnightMovement(p: Piece, longestMove: number, amount: number) {
      if (p.name === "knight") {
          if (amount === 1) {
              p.movement.splice(0, 8);
          } else if (longestMove > 2) {
              p.movement.push(new Pos(longestMove - 1, longestMove - 2), new Pos(longestMove - 2, longestMove - 1),
                  new Pos(-longestMove + 2, longestMove - 1), new Pos(-longestMove + 1, longestMove - 2),
                  new Pos(longestMove - 1, -longestMove + 2), new Pos(longestMove - 2, -longestMove + 1),
                  new Pos(-longestMove + 2, -longestMove + 1), new Pos(-longestMove + 1, -longestMove + 2));
          }
      }
  }
}


