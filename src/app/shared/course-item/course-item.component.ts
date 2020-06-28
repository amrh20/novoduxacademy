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
  @Input() course : Course;
  errorMsg: string
  imagePath= "http://novoduxapi.native-tech.co/Images/CategoryImages/";

  constructor(private productService:ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  addToFav(CourseId) {
    this.productService.addFavourite(CourseId).subscribe( res => {
      this.toastr.success('your course added successfully')
    }, err => {
      if (err.error.Message == "Authorization has been denied for this request.") {
       this.errorMsg= 'please login first'
      //  setTimeout(function(){ this.errorMsg= " " }, 200);
      // alert('please login first')
      }
      this.toastr.error('something error')
    })
   }
}
