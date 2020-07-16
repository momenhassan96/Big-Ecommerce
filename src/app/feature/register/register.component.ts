import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ConfirmPassword } from '../../shared/validators/confirm-password';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm:FormGroup;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('',Validators.required),
      Password: new FormControl('',[Validators.required,Validators.minLength(6)]) ,
      Gender: new FormControl('',Validators.required),
      DateOfBirth: new FormControl({value: '', disabled: true},Validators.required),
      Email: new FormControl('',[Validators.required,Validators.pattern('([A-Za-z0-9._%-]+@[A-Za-z0-9._@%-]+\.[a-z]{2,3})$')]),
      Address: new FormControl('',Validators.required),
      City: new FormControl('',Validators.required),
      Country: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      confirmPassword: new FormControl('',Validators.required)
    },
    {validators:ConfirmPassword.passwordErrorValidator})
  }

  get name(){
    return this.registerForm.get('name').value;
  }

  get Password(){
    return this.registerForm.get('Password').value;
  }

  get Gender(){
    return this.registerForm.get('Gender').value;
  }
  
  get DateOfBirth(){
    return this.registerForm.get('DateOfBirth').value;
  }

  get Email(){
    return this.registerForm.get('Email').value;
  }

  get Address(){
    return this.registerForm.get('Address').value;
  }

  get City(){
    return this.registerForm.get('City').value;
  }

  get Country(){
    return this.registerForm.get('Country').value;
  }

  get phone(){
    return this.registerForm.get('phone').value;
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword').value;
  }
  
  register(){
    this.authService.register({
      "Username": this.name ,
      "password": this.Password,
      "Gender": this.Gender,
      "DateOfBirth": this.DateOfBirth,
      "Email": this.Email,
      "Address": this.Address,
      "City": this.City,
      "Country": this.Country,
      "Phone": this.phone,
      "Created": new Date(),
      // "LastActive": '',
    })
  }
}
