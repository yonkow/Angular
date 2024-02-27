import { Component } from '@angular/core';

// type User = {
//   name: string;
//   age: number;
//   status: string;
// }

interface User {
  name: string;
  age: number;
  status: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  isToggle = false;

  users = [
    { name: 'Pesho', age: 17, status: 'green' },
    { name: 'Mitko', age: 30, status: 'red' },
    { name: 'Ivka', age: 29, status: 'yellow' },
    { name: 'Heilun', age: 2, status: 'red' },
    { name: 'Niki', age: 28, status: 'green' },
  ] as User[];

  handleClick() {
    this.isToggle = !this.isToggle
    
    console.log('clicked!');
    console.log(this.isToggle);
    
  }
}
