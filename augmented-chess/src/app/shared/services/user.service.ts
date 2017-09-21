import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private username: string;

  constructor() { }

  setUsername (username) {
    this.username = username;
  }
  getUsername () {
    return this.username;
  }

}
