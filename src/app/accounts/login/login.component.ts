import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    Phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)])
  });
  get Phone() {
    return this.loginForm.get('Phone');
  }
  get password() {
    return this.loginForm.get('password');
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  CreateAccount() {
    this.router.navigate(['/register'])
  }

}
