import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //baseurl
  baseurl: string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) {}

  //call apis
  //get list
  listUsers() {
    return this.http.get(this.baseurl + 'users');
  }

  //view specific profile
  viewUser(id: string) {
    return this.http.get(this.baseurl + 'users/' + id);
  }

  //addUser service
  addUser(userObj: any) {
    return this.http.post(this.baseurl + 'users', userObj);
  }

  //delete specific profile
  deletUser(id: string) {
    return this.http.delete(this.baseurl + 'users/' + id);
  }
}
