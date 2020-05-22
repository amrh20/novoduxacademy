import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "https://www.yourtrainingedge.com/wp-content/uploads/2019/06/What-is-important-in-order-to-create-the-best-eLearning-courses-Social-Media.jpg"},
    {img: "https://www.yourtrainingedge.com/wp-content/uploads/2019/06/What-is-important-in-order-to-create-the-best-eLearning-courses-Social-Media.jpg"}
  ]
 // Slick slider config
 public sliderConfig: any = {
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
};
}
