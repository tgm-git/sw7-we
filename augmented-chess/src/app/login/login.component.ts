import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login portal for Augmented Chess";
  infoLogin = "Log in with a user name";
  infoRegister = "Otherwize register a new user";
  currentUser = "";
  loginStatus = "";
  users: string[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  login(user, box) {
    if (this.users.includes(user)) {
      this.userService.setUsername(user);
      this.router.navigateByUrl('main');
    } else {
      this.loginStatus = "No such user exists!";
      box.value = "";
    }
  }

  register(user, box) {
    if (!(this.users.includes(user)) && user !== "") {
      this.currentUser = user;
      this.loginStatus = user + " just registered, have fun!";
      this.users.push(user);
      box.value = "";
    } else if (this.users.includes(user)) {
      this.loginStatus = "user already exists";
      box.value = "";
    }
  }
}
