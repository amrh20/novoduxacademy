import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form= new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)])
  });
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  CreateAccount() {
    this.router.navigate(['/register'])
  }

}
