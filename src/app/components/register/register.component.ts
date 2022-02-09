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


  ngOnInit(): void {
  }
  fullName = new FormControl('', Validators.required)
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  repeatPassword = new FormControl('', Validators.required)



}
