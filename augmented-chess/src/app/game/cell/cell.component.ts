import {Component, Input, OnInit} from '@angular/core';
import {Cell} from "../../shared/model/cell";
import {Piece} from "../../shared/model/piece";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input('cell') cell: Cell;
  private piece: Piece;

  constructor() { }

  ngOnInit() {
  }
}

