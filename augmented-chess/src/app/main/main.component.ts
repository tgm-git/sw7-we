import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = "Main menu";
  inputval = "et eller andet";
  userName = "Bob";
  playerCount = 0;

  constructor() { }

  ngOnInit() {
  }

}
