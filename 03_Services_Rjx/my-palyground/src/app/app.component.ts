import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-palyground';

  constructor(public userService: UserService) {}

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
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