import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  courses: any
  widget3: boolean= true
  widget4: boolean= false
  loading= false
  showFilter: boolean
  listOfCategory
  checkLang
  hideme= []
  constructor(private productService:ProductService,private homeService : HomeService) { }
  ngOnInit(): void {
   this.loading= true
   this.productService.getAllCourses().subscribe((res: any) => {
    this.courses= res.model
    this.loading= false
   })
   this.homeService.getcategoryandSub().subscribe((res:any) => {
    this.listOfCategory= res.model
  })
  this.checkLang= localStorage.getItem('currentLanguage') || 'en'

  }
  show() {
    this.showFilter = true
  }
  close() {
    this.showFilter = false
  }
  widget() {
    this.widget4= !this.widget4
    this.widget3= !this.widget3
  }
}
