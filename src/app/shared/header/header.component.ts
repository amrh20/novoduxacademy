import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
public featureConfig: any= {
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
}
  ngOnInit(): void {
  }

}
