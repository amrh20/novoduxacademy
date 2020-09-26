import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers
  imagePath= "http://novoduxadmin.native-tech.co/Images/CourseImages/"
  checkLang
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getHomeDate().subscribe((res: any)=> {
      this.offers= res.model.Offers
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'

  }


}
