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

  constructor() { }

  ngOnInit() {
  }

}
