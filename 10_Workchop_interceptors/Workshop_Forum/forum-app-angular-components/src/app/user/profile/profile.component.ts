import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { UserService } from '../user.service';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditMode = false;

  get user() {
    const { username, email, phoneNumber } = this.userService.user!;
    const [ext, ...tel] = phoneNumber!.split(' ');
    return {
      username,
      email,
      ext,
      tel: tel.join(' '),
    };
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
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

    const profileDetails = this.form.value as ProfileDetails;
    const{username, email, tel} = profileDetails

    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.toggleEditMode();
    });
  }
}
