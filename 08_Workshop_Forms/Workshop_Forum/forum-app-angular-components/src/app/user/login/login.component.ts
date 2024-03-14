import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  appEmailDomains = appEmailDomains

  @ViewChild(
    // 'form',
    NgForm,
    { static: true }
  )
  form!: ElementRef<HTMLInputElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  login(form: NgForm): void {
    // TODO: for now we are not handling the data
    if (form.invalid) {return;}

    this.userService.login();

    const returnUrl =
      this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}
