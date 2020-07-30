import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: ['./categories-home.component.scss']
})
export class CategoriesHomeComponent implements OnInit {
  checkLang
  categories: any
  imagePath = "http://novoduxadmin.native-tech.co/Images/CategoryImages/"
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getHomeDate().subscribe((res: any) => {
      this.categories= res.model.Categories
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow:"<i class='fa fa-angle-left' aria-hidden='true'></i>",
    // nextArrow:"<i class='fa fa-angle-right' aria-hidden='true'></i>",
    rtl : localStorage.getItem('currentLanguage') === "ar" ? true : false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

}
