import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})
export class AdvertisementsComponent implements OnInit {
  advertisements;
  imagePath= "http://novoduxapi.native-tech.co/Images/advertisementimages/";
  constructor(private homeService:HomeService) { }
  ngOnInit(): void {
    this.homeService.getHomeDate().subscribe((res: any) => {
     this.advertisements= res.model.Advertisements
    })
  }

  public sliderConfig: any = {
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<i class='fa fa-angle-left' aria-hidden='true'></i>",
    nextArrow:"<i class='fa fa-angle-right' aria-hidden='true'></i>",
    rtl : localStorage.getItem('currentLanguage') === "ar" ? true : false,
  };
}
