import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditMode = false;

  get user() {
    const { firstName, email, phoneNumber } = this.userService.user!;
    const [ext, ...tel] = phoneNumber!.split(' ');
    return {
      firstName,
      email,
      ext,
      tel: tel.join(' '),
    };
  }

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    ext: [''],
    tel: [''],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form.setValue(this.user);
  }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfile(): void {
    if (this.form.invalid) {
      return;
    }

    const { firstName, email, ext, tel } = this.form.value;

    this.userService.user = {
      firstName,
      email,
      phoneNumber: ext + ' ' + tel,
    } as any;

    this.toggleEditMode()
  }
}
