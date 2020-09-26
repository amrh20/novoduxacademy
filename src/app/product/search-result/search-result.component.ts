import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  courses;
  imagePath= "http://novoduxadmin.native-tech.co/Images/CategoryImages/";
  loading: boolean
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.loading= true
   let SubCategoryId = Number(localStorage.getItem('SubCategoryId'))
   this.productService.getSubTaxonsCourses(SubCategoryId).subscribe((res: any) => {
    this.courses= res.model
    this.loading= false
   })
  }
 
}
