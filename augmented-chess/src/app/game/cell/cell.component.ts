import {Component, Input, OnInit} from '@angular/core';
import {Cell} from "../../shared/model/cell";
import {Piece} from "../../shared/model/piece";
import {DropEvent} from "ng2-drag-drop";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input('cell') cell: Cell;
  private piece: Piece;

  constructor() { }

  ngOnInit() {}

  getPieceImage(): string {
    return this.piece ? this.piece.image : "";
  }

  onItemDrop(e: DropEvent) {
      console.log(e.dragData);
      this.piece = e.dragData.piece;
      e.dragData.armybox.splice(e.dragData.armybox.indexOf(e.dragData.piece), 1);
  }
}

