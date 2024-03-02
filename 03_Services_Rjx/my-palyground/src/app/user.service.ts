import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user';

@Injectable()
export class UserService implements OnDestroy{
  users: User[] = [
    { name: 'Pesho', age: 20 },
    { name: 'Stoyan', age: 34 },
    { name: 'Stavri', age: 52 },
    { name: 'Kircho', age: 12 },
  ];

  ngOnDestroy(): void {
    // clear terminal, detach from events
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    }

    this.users.push(user);
    // this.users = [...this.users, user];
    // console.log(this.users);
    
    inputName.value = '';
    inputAge.value = '';
  }

}
