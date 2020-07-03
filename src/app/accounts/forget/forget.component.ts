import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  errorMsg: string
  Loading: boolean
  forgetForm= new FormGroup({
    phone: new FormControl('', [Validators.required])
  })
  constructor(private authService: AuthService, private toasterService:ToastrService) { }
  
  get phone() {
      return this.forgetForm.get('phone');
  }
  forget () {
    let PhoneNumber= this.forgetForm.value.phone
    this.Loading= true
    this.authService.verify(PhoneNumber).subscribe(()=>{
      this.toasterService.success('successfully send')
      this.forgetForm.reset()
      this.Loading=false
      this.errorMsg= ""
    },err => {
      this.toasterService.error('something error')
      if(err.errors?.message== "Student not found") {
        this.toasterService.error('something error')
      }
      this.errorMsg= "this phone number doesn't exist"
      this.Loading= false
    })
  }
  ngOnInit(): void {
  }

}
