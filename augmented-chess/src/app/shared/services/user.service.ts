import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private username: string;
  private users: string[];

  constructor() {
    // this.username = "user";
    this.users = [];
    this.users.push("user");
  }

  setUsername (username) {
    this.username = username;
  }
  getUsername () {
    return this.username;
  }

  getUsers () {
    return this.users;
  }
}
