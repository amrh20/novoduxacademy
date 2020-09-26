import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss']
})
export class StudentCoursesComponent implements OnInit {
  courses;
  checkLang;
  imagePath= "http://novoduxadmin.native-tech.co/Images/CourseImages/";
  loading: boolean
  constructor(private productService: ProductService, private router:Router) { }
  logout() {
    localStorage.removeItem('authToken')
    this.router.navigate(['home'])
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
