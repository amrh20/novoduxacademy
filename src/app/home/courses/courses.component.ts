import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  categories: any;
  imagePath = "http://novoduxapi.native-tech.co/Images/CategoryImages/"
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getHomeDate().subscribe((res: any) => {
      this.categories= res.model.Categories
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
    nextArrow:"<i class='fa fa-angle-right' aria-hidden='true'></i>"
  };
}
