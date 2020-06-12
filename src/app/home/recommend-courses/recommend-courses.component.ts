import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-recommend-courses',
  templateUrl: './recommend-courses.component.html',
  styleUrls: ['./recommend-courses.component.scss']
})
export class RecommendCoursesComponent implements OnInit {
   topSellingCourese;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getHomeDate().subscribe((res: any)=> {
      this.topSellingCourese= res.model.TopSellingCourses
    })
  }
  public sliderConfig: any = {
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };



  
}
