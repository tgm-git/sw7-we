import { Component, OnInit } from '@angular/core';
import {DropEvent} from "ng2-drag-drop";

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
    items = [
        {id: 0, name: "Apple", type: "fruit"},
        {id: 1, name: "Carrot", type: "vegetable"},
        {id: 2, name: "Orange", type: "fruit"}];
    droppedItems = [];


  constructor() { }

  ngOnInit() {
  }


  onItemDrop(e: DropEvent) {
      // Get the dropped data here

      // console.log(e.dragData);
      // console.log(this.items.findIndex(i => i.name === e.dragData.name));
      // console.log(this.items);
      this.items.splice(this.items.findIndex(i => i.name === e.dragData.name), 1);
      this.droppedItems.push(e.dragData);
  }

}
