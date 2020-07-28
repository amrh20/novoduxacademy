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
  Countries:any
  overlay: boolean
  loading: boolean
  checkLang
  imageSrc: string = '';
  test: any
  regform = new FormGroup({
    name: new FormControl('', Validators.required),
    Phone: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(7)]),
    email: new FormControl('',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    category: new FormControl('', Validators.required),
    phoneKey: new FormControl('', Validators.required),
    image: new FormControl(),
    country: new FormControl(),
    genederInput: new FormControl(),
    bio: new FormControl()
  });

  phoneKeys = [
    { num :"+20"},
    { num :"+966" }
  ]
  geneder= [
    {
      type: "male",
      value: 1,
      name: "geneder"
    },
    {
      type: "female",
      value: 2,
      name: "geneder"
    }
  ]
  
  constructor(private router:Router,
    private authService:AuthService, private metaDataService:MetaDataService) { }

  ngOnInit(): void {
      this.metaDataService.getmetaData().subscribe((res: any)=> {
        this.categories= res.model.Categories
        this.Countries= res.model.Countries
      })  
      this.checkLang= localStorage.getItem('currentLanguage') || 'en'
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
  get email() {
    return this.regform.get('email')
  }
  get image() {
    return this.regform.get('image')
  }
  get country() {
    return this.regform.get('country')
  }
  get genederInput() {
    return this.regform.get('genederInput')
  }
  get bio() {
    return this.regform.get('bio')
  }
  // selectOption(id: number) {
  //  }


  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.test= this.imageSrc.split(',')[1]
  }
 register() {
  this.overlay= true
  this.loading= true
  const Name = this.regform.value.name
  const PhoneKey= this.regform.value.phoneKey
  const PhoneNumber = this.regform.value.Phone
  const CategoryId= this.regform.value.category
  const CountryId= this.regform.value.country
  const Password= this.regform.value.password
  const ConfirmPassword= this.regform.value.ConfirmPassword
  const Email= this.regform.value.email
  const ProfileImage= this.test
  const GenderId= this.regform.value.genederInput
  const Bio= this.regform.value.bio
   this.authService.register(Name,PhoneKey,PhoneNumber ,CategoryId,Password,
    ConfirmPassword,Email,ProfileImage,CountryId,GenderId,Bio).subscribe(res=> {  
     this.regform.reset()
     this.router.navigate(['/verfiy'])
     this.overlay= false
     this.loading= false
   },err => {
    this.regform.reset()
    this.overlay= false
    this.loading= false
   }) 
 }
 saveData() {
  const PhoneKey= this.regform.value.phoneKey
  const PhoneNumber = this.regform.value.Phone
  localStorage.setItem('phoneNumber',PhoneNumber)
  localStorage.setItem('PhoneKey',PhoneKey)
}
}
