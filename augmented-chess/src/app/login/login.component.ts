import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.users = Array<string>();
  }

  login(user, box) {
    if (this.users.includes(user)) {
      this.currentUser = user;
      this.loginStatus = " is currently logged in, have fun!";
    } else {
      this.loginStatus = "No such user exists!";
      box.value = "";
    }
  }

  register(user, box) {
    if (!(this.users.includes(user)) && user !== "") {
      this.currentUser = user;
      this.loginStatus = " just registered, have fun!";
      this.users.push(user);
      box.value = "";
    } else if (this.users.includes(user)) {
      box.value = "";
    }
  }
}
