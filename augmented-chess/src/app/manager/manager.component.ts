import { Component, OnInit } from '@angular/core';
import {Army} from "../shared/model/army";
import {Piece} from "../shared/model/piece";
import {Bishop} from "../shared/model/pieces/bishop";
import {King} from "../shared/model/pieces/king";
import {Pawn} from "../shared/model/pieces/pawn";
import {Queen} from "../shared/model/pieces/queen";
import {Knight} from "../shared/model/pieces/knight";
import {Rook} from "../shared/model/pieces/rook";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  armies: Army[] = [
      {name: "Army 1", bp: 22, pieces: new Array<Piece>(new Bishop("black"), new King("black"))},
      {name: "Army 2", bp: 0, pieces: new Array<Piece>()},
      {name: "Army 3", bp: 0, pieces: new Array<Piece>()},
      {name: "Army 4", bp: 0, pieces: new Array<Piece>()}
  ];
  selectedArmy: Army;
  armyBeingEdited: Army;
  testPieceCounter: number;
  black = "black";

  constructor() {
    this.testPieceCounter = this.armies.length;
    for (this.testPieceCounter; this.testPieceCounter <= 20; this.testPieceCounter++) {
        this.armies[0].pieces.push(new Pawn("black"));
    }
    this.selectedArmy = this.armies.length === 0 ? new Army("No army selected", 0, new Array<Piece>()) : this.armies[0];
      this.armyBeingEdited = Object.assign({}, this.selectedArmy);
  }

  ngOnInit() {
  }

  createArmy() {
      this.armies.push({name: "Army " + (this.armies.length + 1).toString(), bp: 0, pieces: new Array<Piece>()});
      this.selectArmy(this.armies[this.armies.length - 1]);
  }

  deleteArmy(a) {
    if (this.armies.indexOf(a) !== -1) {
      this.armies.splice(this.armies.indexOf(a), 1);
      this.selectedArmy = new Army("No army selected", 0, new Array<Piece>());
    }
  }

  saveArmy(a) {
    this.selectedArmy.name = a.name;
    this.selectedArmy.bp = a.bp;
    this.selectedArmy.pieces = a.pieces;
  }

  selectArmy(a) {
    this.selectedArmy = a;
    this.armyBeingEdited = Object.assign({}, this.selectedArmy);
  }

  addPiece(t) {
      switch (t) {
          case "King": this.armyBeingEdited.pieces.push(new King("black")); break;
          case "Queen": this.armyBeingEdited.pieces.push(new Queen("black")); break;
          case "Knight": this.armyBeingEdited.pieces.push(new Knight("black")); break;
          case "Bishop": this.armyBeingEdited.pieces.push(new Bishop("black")); break;
          case "Rook": this.armyBeingEdited.pieces.push(new Rook("black")); break;
          case "Pawn": this.armyBeingEdited.pieces.push(new Pawn("black")); break;
      }

  }
}
