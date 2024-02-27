import { Component } from '@angular/core';

// type User = {
//   name: string;
//   age: number;
//   status: string;
// }

interface User {
  name: string;
  age: number;
  status?: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  isToggle = false;

  users = [
    { name: 'Pesho', age: 17 },
    { name: 'Mitko', age: 30 },
    { name: 'Ivka', age: 29, status: 'red' },
    { name: 'Heilun', age: 2, status: 'yellow' },
    { name: 'Niki', age: 28, status: 'green' },
  ] as User[];

  handleClick() {
    this.isToggle = !this.isToggle

    console.log('clicked!');
    console.log(this.isToggle);

  }
}
