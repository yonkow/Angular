import { Injectable, OnDestroy } from '@angular/core';
import { JsonPlaceHolderUser, User } from './types/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService implements OnDestroy {
  URL = 'https://jsonplaceholder.typicode.com/users';
  users: JsonPlaceHolderUser[] = [];

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    // clear terminal, detach from events
  }

  addUser(inputName: HTMLInputElement, inputEmail: HTMLInputElement) {
    const user = {
      name: inputName.value,
      email: inputEmail.value,
    } as JsonPlaceHolderUser;

    this.users.push(user);
    // this.users = [...this.users, user];
    // console.log(this.users);

    inputName.value = '';
    inputEmail.value = '';
  }

  getUsers() {
    // return fetch(this.URL).then((res) => res.json());
    return this.http.get<JsonPlaceHolderUser[]>(this.URL);
  }
}
