import { Component, OnInit } from '@angular/core';
import {Army} from "../shared/model/army";
import {Piece} from "../shared/model/piece";
import {Bishop} from "../shared/model/pieces/bishop";
import {King} from "../shared/model/pieces/king";
import {Pawn} from "../shared/model/pieces/pawn";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  armies: Army[] = [
      {name: "Army 1", bp: 20, pieces: new Array<Piece>(new Bishop("black"), new King("black"))},
      {name: "Army 2", bp: 10, pieces: new Array<Piece>()},
      {name: "Army 3", bp: 30, pieces: new Array<Piece>()},
      {name: "Army 4", bp: 40, pieces: new Array<Piece>()}
  ];
  selectedArmy: Army;
  testPieceCounter: number;

  constructor() {
    this.testPieceCounter = this.armies.length;
    for (this.testPieceCounter; this.testPieceCounter < 20; this.testPieceCounter++) {
        this.armies[0].pieces.push(new Pawn("black"));
    }
    this.selectedArmy = this.armies.length === 0 ? new Army("No army selected", 0, new Array<Piece>()) : this.armies[0];
  }

  ngOnInit() {
  }

  createArmy() {
      this.armies.push({name: "Army " + (this.armies.length + 1).toString(), bp: 0, pieces: new Array<Piece>()});
      this.selectedArmy = this.armies[this.armies.length - 1];
  }

  deleteArmy(a) {
    if (this.armies.indexOf(a) !== -1) {
      this.armies.splice(this.armies.indexOf(a), 1);
      this.selectedArmy = new Army("No army selected", 0, new Array<Piece>());
    }
  }

  saveArmy() {

  }

  selectArmy(a) {
    this.selectedArmy = a;
  }
}
