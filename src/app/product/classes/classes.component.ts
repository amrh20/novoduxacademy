import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  subCourses;
  listOfCategory;
  listOfSubCategory
  checkLang  
  showFilter
  hideme= []
  courses: any
  showCourses: boolean= false
  teachPath="http://nativeacademydashboard.native-tech.co/Images/TeacherImages/" 
  constructor(private activeRoute:ActivatedRoute,
    private productService:ProductService,
    private toastr: ToastrService,private homeService:HomeService) { 
  }

  ngOnInit(): void {
    this.homeService.getCategories().subscribe((res:any) => {
      this.listOfCategory= res.model
    })

    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }
 
  selectCatgory(e) {
    this.homeService.getSubCategories(e).subscribe((res: any) => {  
     this.listOfSubCategory= res.model
    })
  }
  selectSubCatgory(e) {
    console.log(e)
    this.homeService.getAllCoursesBySubCategoryId(e).subscribe((res:any) => {
      console.log("courses", res.model)
      this.courses= res.model
      this.showCourses= true
    })
  }
  show() {
    this.showFilter = true
  }
  close() {
    this.showFilter = false
  }  

}
