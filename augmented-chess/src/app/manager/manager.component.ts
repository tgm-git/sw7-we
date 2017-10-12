import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  armies: Army[] = [
      {name: "Army 1", bp: 37, pieces: new Array<Piece>(new King("black"), new Queen("black"),
                                                        new Bishop("black"), new Bishop("black"),
                                                        new Knight("black"), new Knight("black"),
                                                        new Rook("black"), new Rook("black"),
                                                        new Pawn("black"), new Pawn("black"),
                                                        new Pawn("black"), new Pawn("black"),
                                                        new Pawn("black"), new Pawn("black"),
                                                        new Pawn("black"), new Pawn("black"))},
      {name: "Army 2", bp: 0, pieces: new Array<Piece>()},
      {name: "Army 3", bp: 0, pieces: new Array<Piece>()},
      {name: "Army 4", bp: 0, pieces: new Array<Piece>()}
  ];
  selectedArmy: Army;
  armyBeingEdited: Army;
  pieceEditList: Piece[] = [new Undefined()];
  tempbp = 0;
  black = "black";
  addHP = "Hitpoints           +1 (cost +3)";
  addat = "Attack damage +1 (cost +2)";
  addmo = "Move length     +1 (cost +3)";

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

  deleteArmy(a) {
    if (this.armies.indexOf(a) !== -1) {
      this.armies.splice(this.armies.indexOf(a), 1);
      this.selectedArmy = new Army("No army selected", 0, new Array<Piece>());
    }
  }

  saveArmy(a) {
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

  selectArmy(a) {
    this.selectedArmy = a;
    this.armyBeingEdited = Object.assign({}, this.selectedArmy);
    this.closePieceEdit();
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

  openPieceEdit(p) {
    this.pieceEditList.push(p);
    this.pieceEditList.splice(0, 1);
  }

    closePieceEdit() {
        this.pieceEditList.push(new Undefined());
        this.pieceEditList.splice(0, 1);
    }

  deletePiece(p) {
      if (this.armyBeingEdited.pieces.indexOf(p) !== -1) {
          this.armyBeingEdited.pieces.splice(this.armyBeingEdited.pieces.indexOf(p), 1);
      }
      this.closePieceEdit();
  }

  addHpToPiece(p) {
    this.armyBeingEdited.pieces[this.armyBeingEdited.pieces.indexOf(p)].bp += 3;
    this.armyBeingEdited.pieces[this.armyBeingEdited.pieces.indexOf(p)].hitpoints++;
  }

  addAtToPiece(p) {
    this.armyBeingEdited.pieces[this.armyBeingEdited.pieces.indexOf(p)].bp += 2;
    this.armyBeingEdited.pieces[this.armyBeingEdited.pieces.indexOf(p)].attack++;
  }

  addMoToPiece(p) {
    this.armyBeingEdited.pieces[this.armyBeingEdited.pieces.indexOf(p)].bp += 3;
    this.armyBeingEdited.pieces[this.armyBeingEdited.pieces.indexOf(p)].movement++;
  }
}
