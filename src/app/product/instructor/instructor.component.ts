import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
   instructor
   courses
   imagePath= 'http://novoduxadmin.native-tech.co/Images/TeacherImages/'

  constructor(private activeRouter:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(parm=> {
      let id =parm.id
      this.productService.teacherProfileForStudent(id).subscribe((res: any) => {
        this.instructor= res.model
        this.courses= this.instructor.Courses
        console.log(this.courses)
      })
    })
  }
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl : localStorage.getItem('currentLanguage') === "ar" ? true : false,
  };
}
