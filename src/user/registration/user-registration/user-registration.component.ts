import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      cpassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    },this.passwordMatchingValidators);
  }
  passwordMatchingValidators(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('cpassword').value ? null:{notmatched: true};

  }
  // getter methods for form control

  get userName(){
    return this.registrationForm.get('userName') as FormControl
  }

  get email(){
    return this.registrationForm.get('email') as FormControl
  }

  get password(){
    return this.registrationForm.get('password') as FormControl
  }

  get cpassword(){
    return this.registrationForm.get('cpassword') as FormControl
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl
  }
  onSubmit(){
    console.log(this.registrationForm);
  }

}
