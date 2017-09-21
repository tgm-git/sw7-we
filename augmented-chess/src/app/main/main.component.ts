import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = "Main menu";
  inputval = "et eller andet";
  userName: string;
  playerCount = 0;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (!this.userService.getUsername()) {
      this.router.navigateByUrl("login");
    } else {
      this.userName = this.userService.getUsername();
    }
  }
}
