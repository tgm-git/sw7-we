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

  constructor() {}

  ngOnInit() {}

  onItemDrop(e: DropEvent) {
      // check if piece arrived from an armybox or another cell
      if (e.dragData.armybox) { // dragdata in this case consist of armybox and piece
          // todo: check if valid setup position

          this.cell.piece = e.dragData.piece;
          this.cell.image = e.dragData.piece.image;

          if (e.dragData.piece.colour === "white") {
              this.game.whiteArmy.push(e.dragData.piece);
          } else {
              this.game.blackArmy.push(e.dragData.piece);
          }
          e.dragData.armybox.splice(e.dragData.armybox.indexOf(e.dragData.piece), 1);
          this.game.checkSetupDone();
      } else { // dragdata in this case consists of cell
          if (this.cell !== e.dragData.cell) {
              // todo: check if valid movement
              

              // copy piece to new cell
              this.cell.image = e.dragData.cell.image;
              this.cell.piece = Object.assign({}, e.dragData.cell.piece);

              // remove piece from old cell
              e.dragData.cell.image = "";
              e.dragData.cell.piece = null;
          }
      }
  }
}

