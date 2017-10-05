import {Component, Input, OnInit} from '@angular/core';
import {Cell} from "../../shared/model/cell";
import {Piece} from "../../shared/model/piece";
import {DropEvent} from "ng2-drag-drop";
import {King} from "../../shared/model/pieces/king";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input('cell') cell: Cell;

  constructor() { }

  ngOnInit() {}

  onItemDrop(e: DropEvent) {
      console.log(e.dragData);

      // check if piece arrived from an image or another cell
      if (e.dragData.armybox) {
          console.log("box");
          this.cell.piece = e.dragData.piece;
          this.cell.image = e.dragData.piece.image;
          e.dragData.armybox.splice(e.dragData.armybox.indexOf(e.dragData.piece), 1);
      } else {
          console.log("cell");

          // copy piece to new cell
          this.cell.image = e.dragData.cell.image;
          this.cell.piece = Object.assign({}, e.dragData.cell.piece);

          // remove piece from old cell
          e.dragData.cell.image = "";
          e.dragData.cell.piece = null;
      }
  }
}

