import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registerDisabled = false;

  ngOnInit(): void {
  }
  fullName = new FormControl('', Validators.required)
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  repeatPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  comparePassword(){
    console.log(this.password.value)
    console.log(this.repeatPassword.value)
    if(this.password.value == this.repeatPassword.value){
      this.registerDisabled=false;
    }
    else{
      this.registerDisabled=true;
    }
  }



}
