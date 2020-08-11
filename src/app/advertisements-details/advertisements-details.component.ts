import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advertisements-details',
  templateUrl: './advertisements-details.component.html',
  styleUrls: ['./advertisements-details.component.scss']
})
export class AdvertisementsDetailsComponent implements OnInit {
  details: any;
  errorMsg: string;
  checkLang;
  imagePath= "http://novoduxapi.native-tech.co/Images/advertisementimages/";
  reserveform= new FormGroup ( {
    comment: new FormControl('', Validators.required)
  })
  constructor(private homeService: HomeService,private toastr: ToastrService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.homeService.getAdvertisementDetails().subscribe((res: any) => {
      this.details= res.model
      this.activeRoute.params.subscribe(params => {
        localStorage.setItem('AdvertisementId',params.id)
      })
    
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }

  get comment() {
    return this.reserveform.get('comment')
  }
  reserve() {
    const Message= this.reserveform.value.comment
    const AdvertisementId= localStorage.getItem('AdvertisementId');
    this.homeService.addAdvertisementOrder(Message,AdvertisementId).subscribe(()=> {
    this.toastr.success('your order send successfully')
    this.reserveform.reset()
    },err=> {
      if(err.error.Message== "Authorization has been denied for this request.") {
       this.errorMsg= 'please login first'
      }
      this.toastr.error('something error')
    })
  } 
  

}
