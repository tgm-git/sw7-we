import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus = "";
  registerStatus = "";
  registerStatusColor = "";

  constructor(private userService: UserService) {
  }

  ngOnInit() {}

  tryLogin(user) {
    console.log(user);
    this.userService.verifyUser(user, (res) => {
        this.loginStatus = res;
    });
  }

  register(user) {
    // if (!(this.users.includes(user)) && user !== "") {
    //   this.loginStatus = user + " just registered, have fun!";
    //   this.users.push(user);
    //   box.value = "";
    // } else if (this.users.includes(user)) {
    //   this.loginStatus = "user already exists";
    //   box.value = "";
    // }
  }
}
