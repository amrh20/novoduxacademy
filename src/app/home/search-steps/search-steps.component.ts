import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-search-steps',
  templateUrl: './search-steps.component.html',
  styleUrls: ['./search-steps.component.scss']
})
export class SearchStepsComponent implements OnInit {
  checkLang
  subTaxons
  taxons
  constructor(private homeService:HomeService, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.GetTaxons().subscribe((res: any) => {
      this.taxons= res.model
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }
  onChangeTaxons(e) {
    let id=e;
    this.productService.GetSubTaxons(id).subscribe((res: any)=> {
      this.subTaxons= res.model
    }) 
  }
  subCategories(e) {
    localStorage.setItem('SubCategoryId',e)
  }
}
