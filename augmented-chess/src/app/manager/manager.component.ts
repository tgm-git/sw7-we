import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  armies = [
      {name: "Army 1", bp: 20},
      {name: "Army 2", bp: 10},
      {name: "Army 3", bp: 30},
      {name: "Army 4", bp: 40}
  ];
  selectedArmy = {};

  constructor() {

  }

  ngOnInit() {
  }

  createArmy() {
      this.armies.push({name: "Army " + (this.armies.length + 1).toString(), bp: 0});
  }

  deleteArmy(a) {
    if (a) {
      this.armies.splice(this.armies.indexOf(a), 1);
    }
  }

  saveArmy() {

  }

  selectArmy(a) {
    this.selectedArmy = a;
  }
}
