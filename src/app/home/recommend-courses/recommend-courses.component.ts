import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recommend-courses',
  templateUrl: './recommend-courses.component.html',
  styleUrls: ['./recommend-courses.component.scss']
})
export class RecommendCoursesComponent implements OnInit {
   topSellingCourese;
   checkLang
   errorMsg
   imagePath= "http://novoduxapi.native-tech.co/Images/CourseImages/"
  constructor(private homeService:HomeService,
    private productService:ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.homeService.getHomeDate().subscribe((res: any)=> {
      this.topSellingCourese= res.model.TopSellingCourses
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }
  public sliderConfig: any = {
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl : localStorage.getItem('currentLanguage') === "ar" ? true : false,
  };

  addToFav(CourseId) {
    this.productService.addFavourite(CourseId).subscribe( res => {
      this.toastr.success('your course added successfully')
    }, err => {
      if (err.error.Message == "Authorization has been denied for this request.") {
       this.errorMsg= 'please login first'
      }
      this.toastr.error('something error')
    })
   }

  
}
