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
import {ArmyService} from "../shared/services/army.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  armies: Army[];
  selectedArmy: Army;
  armyBeingEdited: Army;
  pieceEdit: Piece = new Undefined();
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
  bigBoardInactive = true;
  bigBoard: number[][] = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  constructor(private armyService: ArmyService) {

  }

  ngOnInit() {
    this.armies = this.armyService.armies;
    this.selectedArmy = this.armies.length === 0 ? new Army("No army selected", 0, new Array<Piece>()) : this.armies[0];
    this.armyBeingEdited = Object.assign({}, this.selectedArmy);
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
    this.selectedArmy.bp = a.bp;
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
    this.updateArmyBP();
  }

  openPieceEdit(p: Piece) {
    this.pieceEdit = p;
    this.resetMiniBoard();
    this.miniBoard[3][4] = 2;
    this.reDrawMiniBoard(p);
    this.reDrawBigBoard(p);
    this.pieceEdit = p;
  }

  closePieceEdit() {
    this.pieceEdit = new Undefined();
    this.resetMiniBoard();
    this.pieceEdit = new Undefined();
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

  reDrawBigBoard(p: Piece) {
    this.resetBigBoard();
    this.bigBoard[7][7] = 2;
    for (let i = 0; i < p.movement.length; i++) {
      if (7 + p.movement[i].x < 16 && 7 + p.movement[i].x >= 0 &&
          7 + p.movement[i].y < 16 && 7 + p.movement[i].y >= 0) {
        this.bigBoard[7 + p.movement[i].x][7 + p.movement[i].y] = 1;
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

  resetBigBoard() {
    this.bigBoard =  [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  }

  copyPiece(p: Piece) {
    if (p.name !== "") {
      this.armyBeingEdited.pieces.push(this.deepCopy(p));
    }
    this.updateArmyBP();
  }

  deletePiece(p: Piece) {
    if (this.armyBeingEdited.pieces.indexOf(p) !== -1) {
      this.armyBeingEdited.pieces.splice(this.armyBeingEdited.pieces.indexOf(p), 1);
    }
    this.closePieceEdit();
    this.updateArmyBP();
  }

  addHpToPiece(p: Piece, amount: number) {
    if ((p.hitpoints + amount > 0 && p.bp > 1) || p.bp < 2 && amount === 1) {
      p.bp += 2 * amount;
      p.hitpoints += amount;
    }
    this.updateArmyBP();
  }

  addAtToPiece(p: Piece, amount: number) {
    if ((p.attack + amount > 0 && p.bp > 0) || p.bp < 1 && amount === 1) {
      p.bp += amount;
      p.attack += amount;
    }
    this.updateArmyBP();
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
          p.mp += amount;
          if (p.name === "knight" && amount === -1 && longestMove === 2) {
            p.mp += amount;
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
        p.mp += amount;
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
      p.mp += amount;
    }
    this.reDrawMiniBoard(p);
    this.reDrawBigBoard(p);
    this.updateArmyBP();
  }

  private updateKnightMovement(p: Piece, longestMove: number, amount: number) {
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

  updateArmyBP() {
    let sum = 0;
    this.armyBeingEdited.pieces.forEach(p => {
      sum += p.bp;
    });
    this.armyBeingEdited.bp = sum;
  }

  private deepCopy(oldObj: any) {
    let newObj = oldObj;
    if (oldObj && typeof oldObj === "object") {
      newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
      for (let i in oldObj) {
        newObj[i] = this.deepCopy(oldObj[i]);
      }
    }
    return newObj;
  }
}
