import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss']
})
export class StudentCoursesComponent implements OnInit {
  courses;
  checkLang;
  imagePath= "http://novoduxapi.native-tech.co/api/Images/CategoryImages/";
  loading: boolean
  constructor(private productService: ProductService) { }
  logout() {
    localStorage.removeItem('authToken')
  }
  ngOnInit(): void {
    this.loading= true
    this.productService.studentCourses().subscribe((res: any) => {
      this.courses= res.model
      this.loading= false
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }

}
