import {Component, OnInit} from '@angular/core';
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
    this.userService.verifyUser(user, (res) => {
        this.loginStatus = res;
    });
  }

  tryRegister(user) {
    this.userService.registerUser(user, (res) => {
      this.registerStatus = res.message;
      this.registerStatusColor = res.color;
    });
  }
}
