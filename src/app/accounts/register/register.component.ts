import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MetaDataService } from 'src/app/shared/services/meta-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  categories: any
  overlay: boolean
  regform = new FormGroup({
    name: new FormControl('', Validators.required),
    Phone: new FormControl('', Validators.required),
    email: new FormControl(),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    category: new FormControl('', Validators.required),
    phoneKey: new FormControl('', Validators.required)
  });

  phoneKeys = [
    { num :"+20"},
    { num :"+966" }
  ]
  
  
  constructor(private router:Router,
    private authService:AuthService, private metaDataService:MetaDataService) { }

  ngOnInit(): void {
      this.metaDataService.getmetaData().subscribe((res: any)=> {
        this.categories= res.model.Categories
      })
 
  }
 
 
  loginNav() {
  this.router.navigate(['/login'])
  }
  get name() {
    return this.regform.get('name')
  }
  get Phone() {
    return this.regform.get('Phone')
  }
  get password() {
    return this.regform.get('password')
  }
  get ConfirmPassword() {
    return this.regform.get('ConfirmPassword')
  }
  get category() {
    return this.regform.get('category')
  }
  get phoneKey() {
    return this.regform.get('category')
  }
  
  // selectOption(id: number) {
  //   console.log(id)
  //  }
 register() {
  this.overlay= true
  const Name = this.regform.value.name
  const PhoneKey= this.regform.value.phoneKey
  const PhoneNumber = this.regform.value.Phone
  const CategoryId= this.regform.value.category
  const Password= this.regform.value.password
  const ConfirmPassword= this.regform.value.ConfirmPassword
  console.log(Name,PhoneKey,PhoneNumber ,CategoryId,Password,ConfirmPassword)
   this.authService.register(Name,PhoneKey,PhoneNumber ,CategoryId,Password,ConfirmPassword).subscribe(res=> {  
     this.regform.reset()
     this.router.navigate(['/verfiy'])
     this.overlay= false
   },err => {
    this.regform.reset()
    this.overlay= false
   }) 
 }
 saveData() {
  const PhoneKey= this.regform.value.phoneKey
  const PhoneNumber = this.regform.value.Phone
  localStorage.setItem('phoneNumber',PhoneNumber)
  localStorage.setItem('PhoneKey',PhoneKey)
}
}
