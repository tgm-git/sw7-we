import { Component, OnInit } from '@angular/core';
import {Cell} from "../../shared/model/cell";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  cell: Cell;

  constructor() { }

  ngOnInit() {
    this.cell = new Cell;
    this.cell.backgroundColour = "black";
  }

}
