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
     console.log(res)
    })
  }

}
