import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-verfiy',
  templateUrl: './verfiy.component.html',
  styleUrls: ['./verfiy.component.scss']
})
export class VerfiyComponent implements OnInit {
  overlay: boolean
  loading: boolean
  verifyform = new FormGroup({
    code: new FormControl('', Validators.required),
  });
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  get code() {
    return this.verifyform.get('code')
  }
  verify() {
    this.overlay= true
    this.loading= true
    let Phone= localStorage.getItem('phoneNumber')
    let PhoneKey= localStorage.getItem('PhoneKey')
    let vcode= this.verifyform.value.code
    console.log(Phone,PhoneKey,vcode)
    this.authService.verifyAccount(PhoneKey,Phone,vcode).subscribe(res => {
      this.router.navigate(['/login'])
      localStorage.clear()
      this.overlay= false
      this.loading= false
    },error => {
      this.overlay= false
      this.loading= false
    })

  }
}
