import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-palyground';
  appUsers: User[] = [];
  constructor(private userService: UserService) { 
    this.appUsers = this.userService.users;
  }

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    //  Validaton of inputs???? Transformation  of the input???
    this.userService.addUser(inputName, inputAge);
    // We would push additional functionality
  }
}



// constructor(private cd: ChangeDetectorRef) {
//   setTimeout(() => {
//     this.title = 'Changed from CD.'
//     this.cd.detectChanges();
//   }, 3000);
// }