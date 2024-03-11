import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;


  // *Renders static content
  // ngOnInit(): void {}

  // *Renders the final content + dynamic content
  // ngAfterViewInit(): void {}

  formSubmitHandler() {
    if (!this.form) {
      return;
    }

    const form = this.form;

    if (form.invalid) {
      console.log('Form is invalid');
      
      return;
    }    
    
    console.log(form.value);

    // *form value => on init
    const { email, password } = form?.value;

    // *two ways to clear input fields
    // form.reset();
    form.setValue({ email: '', password: '' });
  }
}
