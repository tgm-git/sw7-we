import {Component, Input, OnInit} from '@angular/core';
import {Cell} from "../../shared/model/cell";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input('cell') cell: Cell;

  constructor() { }

  ngOnInit() {
  }

}
