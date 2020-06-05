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
  regform = new FormGroup({
    name: new FormControl('', Validators.required),
    Phone: new FormControl('', Validators.required),
    email: new FormControl(),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
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
        console.log(this.categories)
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
  selectOption(id: number) {
    console.log(id)
   }
 register() {
  const Name = this.regform.value.name
  const PhoneKey= "+20"
  const PhoneNumber = this.regform.value.Phone
  const CategoryId= "2"
  const Password= this.regform.value.password
  const ConfirmPassword= this.regform.value.ConfirmPassword
  console.log(Name,PhoneKey,PhoneNumber ,CategoryId,Password,ConfirmPassword)
   this.authService.register(Name,PhoneKey,PhoneNumber ,CategoryId,Password,ConfirmPassword).subscribe(res=> {  
     this.regform.reset()
   },err => {
    this.regform.reset()
   }) 
 }
}
