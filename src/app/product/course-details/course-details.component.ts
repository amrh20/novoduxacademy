import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  coursdetails: any;
  reviews: any;
  constructor(private activeRoute:ActivatedRoute,
              private productService : ProductService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parm => {
      let id =parm.id
      this.productService.getCourseDetails(id).subscribe((res: any) => {
        this.coursdetails= res.model
        console.log("courseDetails", this.coursdetails)
      })
      this.productService.getReviews(id).subscribe((res: any) => {
        this.reviews= res.model;
      })
    })
  }
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };
}
