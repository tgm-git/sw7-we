import {Component, Input, OnInit} from '@angular/core';
import {Cell} from "../../shared/model/cell";
import {DropEvent} from "ng2-drag-drop";
import {Game} from "../../shared/model/game";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input('game') game: Game;
  @Input('cell') cell: Cell;

  constructor() {
  }

  ngOnInit() {
  }

  onItemDrop(e: DropEvent) {
    if (this.game.turn !== e.dragData.piece.colour) {
      return;
    }

    // check if piece arrived from an armybox or another cell
    if (e.dragData.armybox) { // dragdata in this case consist of armybox and piece
      if (!this.cell.piece && this.game.checkValidSetupPos(e.dragData.piece.colour, this.cell.pos)) {
        this.setupTransferPiece(e);
        this.game.changeTurn();
        this.game.checkSetupDone();
      }

    } else { // dragdata in this case consists of cell
      if (this.cell !== e.dragData.cell && this.game.checkValidMove(e.dragData.cell, this.cell)) {
        this.playTransferPiece(e);
        if(this.checkWinCondition() == "none"){
          this.game.changeTurn();
        } else{
          //winner winner chicken dinner
        }
      }
    }
  }

  checkWinCondition (){
    let winner:string = "none";
    let blackKing:boolean = false;
    let whiteKing:boolean = false;

    for(let piece of this.game.blackArmy){
      if(piece.name === "king"){
        blackKing = true;
      }
    }

    for(let piece of this.game.whiteArmy){
      if(piece.name === "king"){
        whiteKing = true;
      }
    }

    if(blackKing == false || whiteKing == false){
      winner = this.game.turn;
    }
    return winner;
  }

  setupTransferPiece(e: DropEvent) {
    this.cell.piece = e.dragData.piece;
    this.cell.image = e.dragData.piece.image;

    if (e.dragData.piece.colour === "white") {
      this.game.whiteArmy.push(e.dragData.piece);
    } else {
      this.game.blackArmy.push(e.dragData.piece);
    }
    e.dragData.armybox.splice(e.dragData.armybox.indexOf(e.dragData.piece), 1);
  }

  playTransferPiece(e: DropEvent) {
    this.cell.image = e.dragData.cell.image;
    this.cell.piece = Object.assign({}, e.dragData.cell.piece);
    e.dragData.cell.image = "";
    e.dragData.cell.piece = null;
    this.game.saveMove(e.dragData.cell, this.cell);
  }
}
