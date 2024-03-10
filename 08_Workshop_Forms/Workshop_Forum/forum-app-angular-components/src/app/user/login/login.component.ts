import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  login(form: NgForm): void {
    // // TODO: for now we are not handling the data
    // this.userService.login();

    // const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    // this.router.navigate([returnUrl]);
  }
}
