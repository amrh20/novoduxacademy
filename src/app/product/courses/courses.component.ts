import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  widget3: boolean= true
  widget4: boolean= false
  courses;
  subcourses;
  constructor(private activeRoute:ActivatedRoute,
    private productService:ProductService,
    private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parm => {
      let id =parm.id
      this.productService.getTaxonsCourses(id).subscribe((res: any) => {
        this.courses= res.model
      })
    })
    this.activeRoute.params.subscribe(parm => {
      let id= parm.id
      this.productService.getSubTaxonsCourses(id).subscribe((res: any) =>{
        this.subcourses= res.model
      })
    })
  }

  widget() {
    this.widget4= !this.widget4
    this.widget3= !this.widget3
  }
}
