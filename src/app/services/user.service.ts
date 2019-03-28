import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host: string;

  /**
   * Create an instance of User UserService
   *
   *  @param {HttpClient} http - The http client being injected
   */
  constructor(private http: HttpClient) {
    this.host = 'https://randomuser.me/';
  }

  /**
   * Get a random user
   *
   * @return Obervable<User>
   */
  getUser() :Observable<User> {
    return this.http.get(this.host + "api").pipe(
      map((data: any) => {
          return new User(data.results[0]);
      })
    )

  }
}
