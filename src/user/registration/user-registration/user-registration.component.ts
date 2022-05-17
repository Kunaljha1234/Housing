import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private userService: UserServiceService, private alertify: AlertifyService) { }

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
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success("Successfully registered");
    }else{
      this.alertify.error("Registration failed");

    }
  }
  userData(): User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }


}
