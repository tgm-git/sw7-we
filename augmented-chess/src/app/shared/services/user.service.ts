import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Router} from "@angular/router";

@Injectable()
export class UserService {
  private username: string;

  constructor(private httpService: HttpService, private router: Router) {
    if (this.username === null) {
      router.navigateByUrl("/");
    }
  }

  verifyUser (username: string) {
    this.httpService.verifyUser(this.username).subscribe((res) => {
      console.log(res);
      if (res === 200) {
        this.username = username;
        this.router.navigateByUrl("main")
      }
    })
  }

  setUsername(username) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }
}
