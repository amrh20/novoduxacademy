import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  errorMsg: string
  imagePath = "http://novoduxadmin.native-tech.co/Images/CourseImages/";
  checkLang
  color: boolean
  favs
  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.checkLang = localStorage.getItem('currentLanguage') || 'en'
    this.productService.getAllCourses().subscribe((res: any) => {

     })
  
  }
  addToFav(CourseId) {
    this.productService.addFavourite(CourseId).subscribe(res => {
      this.toastr.success('your course added successfully')
      location.reload()
    }, err => {
      if (err.error.Message == "Authorization has been denied for this request.") {
        this.toastr.error('please login first')
      }
      else {
        this.toastr.error('something error')
      }
    })
  }
  addToCart(CourseId) {
    // localStorage.setItem('color', JSON.stringify(true))
    // this.color = !!localStorage.getItem('color')
    this.productService.AddToCart(CourseId).subscribe(res => {
      this.toastr.success('your course added successfully')
    }, err => {
      if (err.error?.Message === "Authorization has been denied for this request.") {
        //  this.errorMsg= 'please login first'
        this.toastr.error('please login first')
      }
      else if (err.error.errors?.message === "This Course In your cart") {
        this.toastr.error('This Course In your cart')
      }
      else {
        this.toastr.error('something error')
      }
    })
  }
}
