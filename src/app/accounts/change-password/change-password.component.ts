import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  Loading: boolean;
  chageError: string;
  chageForm= new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  })
  constructor(private authService:AuthService,private tosaterService: ToastrService) { }

  get oldPassword() {
    return this.chageForm.get('oldPassword');
  }
  get newPassword() {
    return this.chageForm.get('newPassword');
  }
  get confirmPassword() {
    return this.chageForm.get('confirmPassword');
  }

  changePassword() {
    let CurrentPassword= this.chageForm.value.oldPassword
    let NewPassword= this.chageForm.value.newPassword
    let ConfirmNewPassword= this.chageForm.value.confirmPassword
    this.Loading= true
    this.authService.changePassword(CurrentPassword,NewPassword,ConfirmNewPassword).subscribe(() => {
      this.tosaterService.success('your password changed successfully')
      this.chageForm.reset()
      this.Loading= false
      this.chageError= ""
    },err => {
      this.tosaterService.error('something error')
      this.Loading= false
      this.chageForm.reset()
      if(err.error.errors.message == 'Invalide Password') {
        this.chageError= "Invalide Password"
       }
    })
  }
  logout() {
    localStorage.removeItem('authToken')
  }
  ngOnInit(): void {
  }

}
