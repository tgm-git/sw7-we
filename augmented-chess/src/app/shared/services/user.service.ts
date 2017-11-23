import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Router} from "@angular/router";

@Injectable()
export class UserService {
  private username: string;

  constructor(private httpService: HttpService, private router: Router) {
    if (!this.username) {
      router.navigateByUrl("/");
    }
  }

  verifyUser(username: string, callback) {
    this.httpService.verifyUser(username).subscribe(
        (res) => {
          console.log("user logged in: " + username);
          this.username = username;
          this.router.navigateByUrl("main");
        },
        (error) => {
          callback(username + " does not exist");
        });
  }

  registerUser(username: string, callback) {
    console.log("1")
    this.httpService.registerUser(username).subscribe(
        (res) => {
          callback({
            color: "green",
            message: "user created: " + username
          });
        },
        (error) => {
          callback({
            color: "red",
            message: username + " already exists"
          });
        });
  }

  setUsername(username) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }
}
