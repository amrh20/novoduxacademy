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
  checkLang  
  showFilter
  hideme= []

  constructor(private activeRoute:ActivatedRoute,
    private productService:ProductService,
    private toastr: ToastrService,private homeService:HomeService) { 
  }

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
  }  

}
