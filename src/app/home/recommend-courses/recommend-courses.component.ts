import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend-courses',
  templateUrl: './recommend-courses.component.html',
  styleUrls: ['./recommend-courses.component.scss']
})
export class RecommendCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
