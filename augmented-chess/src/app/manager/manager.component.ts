import { Component, OnInit } from '@angular/core';
import {Army} from "../shared/model/army";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  armies: Army[] = [
      {name: "Army 1", bp: 20},
      {name: "Army 2", bp: 10},
      {name: "Army 3", bp: 30},
      {name: "Army 4", bp: 40}
  ];
  selectedArmy: Army;

  constructor() {
    this.selectedArmy = this.armies.length === 0 ? new Army("No army selected", 0) : this.armies[0];
  }

  ngOnInit() {
  }

  createArmy() {
      this.armies.push({name: "Army " + (this.armies.length + 1).toString(), bp: 0});
      this.selectedArmy = this.armies[this.armies.length - 1];
  }

  deleteArmy(a) {
    if (this.armies.indexOf(a) !== -1) {
      this.armies.splice(this.armies.indexOf(a), 1);
      this.selectedArmy = new Army("No army selected", 0);
    }
  }

  saveArmy() {

  }

  selectArmy(a) {
    this.selectedArmy = a;
  }
}
