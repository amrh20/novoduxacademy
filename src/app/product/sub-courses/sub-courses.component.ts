import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-sub-courses',
  templateUrl: './sub-courses.component.html',
  styleUrls: ['./sub-courses.component.scss']
})
export class SubCoursesComponent implements OnInit {
  subCourses;
  listOfCategory;
  checkLang
  showFilter
  hideme= []
  constructor(private productService:ProductService,
    private activeRoute:ActivatedRoute,private homeService:HomeService) { }
  // @ViewChild('myInput') myInput:ElementRef; 
  ngOnInit(): void {
    this.homeService.getcategoryandSub().subscribe((res:any) => {
      this.listOfCategory= res.model
    })
    this.activeRoute.params.subscribe(parm => {
      let id =parm.id
      this.productService.getSubTaxonsCourses(id).subscribe((res: any) => {
        this.subCourses= res.model
        console.log("subCourses", this.subCourses)
      })
    })

    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }

  show() {
    this.showFilter = true
  }
  close() {
    this.showFilter = false
  }  // ngAfterViewInit() {
  // }
  
}
