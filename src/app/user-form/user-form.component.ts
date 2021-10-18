import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenStringValidator } from './../shared/username.validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  constructor(private fb: FormBuilder) { }
  registrationForm = this.fb.group({
    userName: ['',[Validators.required,forbiddenStringValidator(/nepal/)]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required]],
  })


  ngOnInit(): void {
  }

  get registrationFormControl() {
    return this.registrationForm.controls;
  }

  get userName(){
    return this.registrationForm.controls.userName;
  }

  get password(){
    return this.registrationForm.controls.password;
  }

  get confirmPassword(){
    return this.registrationForm.controls.confirmPassword;
  }

}
