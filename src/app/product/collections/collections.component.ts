import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

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
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
   this.loading= true
   this.productService.getAllCourses().subscribe((res: any) => {
    this.courses= res.model
    this.loading= false
   })
  }
  widget() {
    this.widget4= !this.widget4
    this.widget3= !this.widget3
  }
}
