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
  userName = "";
  loginStatus = "";

  constructor() { }

  ngOnInit() {
  }

  login(user) {
    this.userName = user;
    this.loginStatus = " is currently logged in, have fun!";
  }

  register(user) {
    this.userName = user;
    this.loginStatus = " just registered, have fun!";
  }
}
