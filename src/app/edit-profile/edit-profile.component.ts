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
    category: new FormControl('', Validators.required)
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
                    category: this.profileDetails?.Category?.Id
                  })
                 })
              }
  ngOnInit(): void {
   this.metaDataService.getmetaData().subscribe((res: any)=> {
    this.categories= res.model.Categories
  })
  }
  selectCategory(e) {
  localStorage.setItem('CategoryId',e)
  }
  selectGeneder(e) {
    localStorage.setItem('GenderId',e)
  }
  get name() {
    return this.editform.get('name')
  }
  get email() {
    return this.editform.get('email')
  }
  editProfile() {
    this.Loading= true
    const Name= this.editform.value.name
    const Email= this.editform.value.email
    const CategoryId= this.editform.value.category
    const GenderId= localStorage.getItem('GenderId') 
    console.log(Name,CategoryId,Email,GenderId)
    this.authService.editProfile(Name,CategoryId,Email,GenderId).subscribe(()=> {
      this.tosaterService.success('your profile updated successfully')
      this.Loading= false
    }, err=> {
      this.tosaterService.error('something error')
      this.Loading= false
    })
  }
}
