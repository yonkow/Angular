import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { JsonPlaceHolderUser, User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-palyground';
  appUsers: JsonPlaceHolderUser[] = [];
  isLoading = true;

  constructor(private userService: UserService) {
    this.appUsers = this.userService.users;
  }

  ngOnInit(): void {
    // this.userService.getUsers().then((users) => {
    //   console.log('user data ', users);
    //   this.appUsers = users;

    //   setTimeout(() => {
    //     this.isLoading = false;
    //   }, 3000);
    // });

    this.userService.getUsers().subscribe((users) => {
        console.log('user data ', users);
        this.appUsers = users;
  
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      });
  }

  setUser(inputName: HTMLInputElement, inputEmail: HTMLInputElement) {
    //  Validaton of inputs???? Transformation  of the input???
    this.userService.addUser(inputName, inputEmail);
    // We would push additional functionality
  }
}

// constructor(private cd: ChangeDetectorRef) {
//   setTimeout(() => {
//     this.title = 'Changed from CD.'
//     this.cd.detectChanges();
//   }, 3000);
// }
