import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpService {
  results: string[];

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

  getUserArmies (username: String) {
    return this.http.get('/api/armies/' + username);
  }
  verifyUser (username: String) {
    return this.http.get('/api/verifyuser/' + username);
  }
  registerUser (username: String) {
    return this.http.post('/api/register/' + username, {});
  }
}
