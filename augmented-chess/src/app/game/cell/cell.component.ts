import {Component, Input, OnInit} from '@angular/core';
import {Cell} from "../../shared/model/cell";
import {DropEvent} from "ng2-drag-drop";
import {Game} from "../../shared/model/game";
import {Undefined} from "../../shared/model/pieces/undefined";

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

  select(){
          this.game.selectedPiece = this.cell.piece ? this.cell.piece : new Undefined();
  }

  onItemDrop(e: DropEvent) {
    if (this.game.turn !== e.dragData.piece.colour) {
      return;
    }

    // check if piece arrived from an armybox or another cell
    if (e.dragData.armybox) { // dragdata in this case consist of armybox and piece
      if (!this.cell.piece && this.game.checkValidSetupPos(e.dragData.piece.colour, this.cell.pos)) {
        this.game.changeTurn();
        this.setupTransferPiece(e);
        this.game.checkSetupDone();
      }

    } else { // dragdata in this case consists of cell
      if (this.cell !== e.dragData.cell && this.game.checkValidMove(e.dragData.cell, this.cell)) {
        this.playTransferPiece(e);
        this.game.changeTurn();
      }
    }
  }

// This function adds a dead piece to the relevant graveyard
  kill(c: Cell){
      if (this.cell.colour === "black") {
          this.game.blackArmyGraveyard.push(c.piece);
      } else {
          this.game.whiteArmyGraveyard.push(c.piece);
      }
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
    if (this.cell.piece) {
      if (e.dragData.piece.attack >= this.cell.piece.hitpoints) {
          if (e.dragData.piece.colour === "white") {
              let index = this.game.blackArmy.findIndex(p => p.id === this.cell.piece.id);
              this.game.blackArmy.splice(index, 1);
          } else {
              let index = this.game.whiteArmy.findIndex(p => p.id === this.cell.piece.id);
              this.game.whiteArmy.splice(index, 1);
          }
      } else {
        this.cell.piece.hitpoints -= e.dragData.piece.attack;
        let newX = this.cell.pos.x;
        let newY = this.cell.pos.y;
        if (e.dragData.cell.piece.name === "knight") {
          newX = e.dragData.cell.pos.x;
          newY = e.dragData.cell.pos.y;
        } else {
          let xDiff = e.dragData.cell.pos.x - this.cell.pos.x;
          let yDiff = e.dragData.cell.pos.y - this.cell.pos.y;
          if (xDiff > 0) {
            if (yDiff > 0) {
              newX++;
              newY++;
            } else if (yDiff < 0) {
              newX++;
              newY--;
            } else {
              newX++;
            }
          } else if (xDiff < 0) {
            if (yDiff > 0) {
              newX--;
              newY++;
            } else if (yDiff < 0) {
              newX--;
              newY--;
            } else {
              newX--;
            }
          } else {
            if (yDiff > 0) {
              newY++;
            } else if (yDiff < 0) {
              newY--;
            }
          }
        }
        if (newX !== this.cell.pos.x || newY !== this.cell.pos.y) {

          newY = 7 - newY;
          this.game.board[newY][newX].piece = Object.assign({}, e.dragData.cell.piece);
          this.game.board[newY][newX].image = e.dragData.cell.image;
          if (newX !== e.dragData.cell.pos.x || newY !== 7 - e.dragData.cell.pos.y) {
            e.dragData.cell.piece = null;
            e.dragData.cell.image = "";
          }

          this.game.saveMove(e.dragData.cell, this.game.board[newY][newX]);
        }
      }
      this.game.checkWinCondition();
    }
    if (!this.cell.piece || 0 >= this.cell.piece.hitpoints) {
        this.cell.piece = Object.assign({}, e.dragData.cell.piece);
        e.dragData.cell.piece = null;

        this.cell.image = e.dragData.cell.image;
        e.dragData.cell.image = "";

        this.game.checkForPawnTransformation(this.cell);
        this.game.saveMove(e.dragData.cell, this.cell);
    }
  }
}
