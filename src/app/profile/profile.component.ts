import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MetaDataService } from '../shared/services/meta-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService,private tosaterService: ToastrService, 
    private router: Router,private metaDataService:MetaDataService) { }
  loading:boolean
  showPopup: boolean
  profile;
  chageError: string;
  edit= true
  categories
  chageForm= new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  })
  editForm= new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  })
  ngOnInit(): void {
    this.loading =true
    this.authService.getStudentProfile().subscribe((res: any) => {
      this.profile= res.model
      this.loading= false
    },err => {
      this.loading= false
    })
   
  }
  get oldPassword() {
    return this.chageForm.get('oldPassword');
  }
  get newPassword() {
    return this.chageForm.get('newPassword');
  }
  get confirmPassword() {
    return this.chageForm.get('confirmPassword');
  }
  get name() {
    return this.chageForm.get('name');
  }
  get email() {
    return this.chageForm.get('email');
  }
  changePassword() {
    let CurrentPassword= this.chageForm.value.oldPassword
    let NewPassword= this.chageForm.value.newPassword
    let ConfirmNewPassword= this.chageForm.value.confirmPassword
    this.authService.changePassword(CurrentPassword,NewPassword,ConfirmNewPassword).subscribe(() => {
      this.tosaterService.success('your password changed successfully')
      this.chageForm.reset()
      this.chageError= ""
    },err => {
      this.tosaterService.error('something error')
      this.chageForm.reset()
      if(err.error.errors.message == 'Invalide Password') {
        this.chageError= "Invalide Password"
       }
    })
  }
  editProfileSubmit() {
    // const Name= this.editForm.value.name
    // const Email= this.editForm.value.email
    // this.authService.EditProfile(Name,Email).subscribe(res => {

    // })
  }
  loggedIn() {
    if(localStorage.getItem('authToken')) {
      return true
    }
  }

  logout() {
    localStorage.removeItem('authToken')
    this.router.navigate(['home'])
  }
  showPopUp() {
    this.showPopup =! this.showPopup
  }
  editProfile() {
    this.edit =! this.edit
  }
}
