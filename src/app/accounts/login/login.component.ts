import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginError:string;
  loginForm= new FormGroup({
    Phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    phoneKey: new FormControl('', Validators.required)
  });
  get Phone() {
    return this.loginForm.get('Phone');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get phoneKey() {
    return this.loginForm.get('phoneKey');
  }
  phoneKeys = [
    { num :"+20"},
    { num :"+966" }
  ]
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  CreateAccount() {
    this.router.navigate(['/register'])
  }
  login() {
    let PhoneNumberWithKey= this.loginForm.value.phoneKey + this.loginForm.value.Phone
    let Password = this.loginForm.value.password
    console.log(PhoneNumberWithKey,Password)
    this.authService.login(PhoneNumberWithKey,Password).subscribe((res: any) => {
    localStorage.setItem('authToken',res.model.Token[0].access_token)
    this.loginForm.reset()
    this.router.navigate(['/home'])
    this.loginForm.value.password= " "
    this.loginForm.value.Phone= " "
    },err => {
      if(err.error.errors.message == 'Student Not Register Yet') {
        this.loginError= "please register first"
      }
      this.loginForm.value.password= " "
      this.loginForm.value.Phone= " "
    })
  }
}
