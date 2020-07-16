import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/authentication/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm:FormGroup;
  constructor(private authService:AuthenticationService) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern('^([A-Za-z0-9._%-]+@[A-Za-z0-9._@%-]+\.[a-z]{2,3})$')
      ]),
      password: new FormControl('',Validators.required)
    })
  }
  get email(){
    return this.signInForm.get('email').value;
  }

  get password(){
    return this.signInForm.get('password').value;
  }
  login(){
    this.authService.login({Username:this.email,Password:this.password})
  }
}
