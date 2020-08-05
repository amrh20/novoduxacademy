import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MetaDataService } from '../shared/services/meta-data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profileDetails
  categories
  Loading
  Countries
  checkLang
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
  editform = new FormGroup({  
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    bio: new FormControl()
  });
  constructor(private authService: AuthService,
              private tosaterService: ToastrService,  
              private router: Router,
              private metaDataService:MetaDataService,
              private fb: FormBuilder
              ) { 
                this.authService.getStudentProfile().subscribe((res: any) => {
                  this.profileDetails = res.model
                  this.editform.patchValue({
                    name:  this.profileDetails?.Name,
                    email: this.profileDetails?.Email,
                    category: this.profileDetails?.Category?.Id,
                    bio: this.profileDetails?.Bio,
                    country: this.profileDetails?.CountryId
                  })
               
                })
              }
  ngOnInit(): void {
   this.metaDataService.getmetaData().subscribe((res: any)=> {
    this.categories= res.model.Categories
    this.Countries= res.model.Countries
  })
  this.checkLang = localStorage.getItem('currentLanguage') || 'en'

  }
  selectCategory(e) {
  localStorage.setItem('CategoryId',e)
  }
  selectCountry(e) {
    localStorage.setItem('CategoryId',e)
  }
  selectGeneder(e) {
    localStorage.setItem('CountryId',e)
  }
  get name() {
    return this.editform.get('name')
  }
  get email() {
    return this.editform.get('email')
  }
  get bio() {
    return this.editform.get('bio')
  }
  editProfile() {
    this.Loading= true
    const Name= this.editform.value.name
    const Email= this.editform.value.email
    const Bio= this.editform.value.bio
    const CategoryId= this.editform.value.category
    const GenderId= localStorage.getItem('GenderId') 
    const CountryId= localStorage.getItem('CountryId')
    console.log(CategoryId)
    this.authService.editProfile(Name,CategoryId,Email,GenderId,Bio,CountryId).subscribe(()=> {
      this.tosaterService.success('your profile updated successfully')
      this.Loading= false
    }, err=> {
      this.tosaterService.error('something error')
      this.Loading= false
    })
  }
}
