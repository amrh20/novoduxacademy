import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  widget3: boolean= true
  widget4: boolean= false
  courses
  subcourses
  showFilter:boolean
  checkLang
  listOfCategory
  hideme= []
  constructor(private activeRoute:ActivatedRoute,
    private productService:ProductService,
    private toastr: ToastrService,private homeService:HomeService) { 
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parm => {
      let id =parm.id
      this.productService.getTaxonsCourses(id).subscribe((res: any) => {
        this.courses= res.model
      })
    })
    this.homeService.getcategoryandSub().subscribe((res:any) => {
      this.listOfCategory= res.model
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
    this.activeRoute.params.subscribe(parm => {
      let id= parm.id
      this.productService.getSubTaxonsCourses(id).subscribe((res: any) =>{
        this.subcourses= res.model
      })
    })
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
