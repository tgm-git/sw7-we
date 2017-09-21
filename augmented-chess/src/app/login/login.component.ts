import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login";
  username="";

//unnecessary
  enter(uname) {
    this.username = uname;
  }


  constructor() { }

  ngOnInit() {
  }

}
