import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { ProductService } from 'src/app/shared/services/product.service';
declare var $: any;

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  taxons;
  subTaxons;
  constructor(private homeService:HomeService, private productService: ProductService) { }
  ngOnInit(): void {
    $.getScript('mainscript.js');
    this.productService.GetTaxons().subscribe((res: any) => {
      this.taxons= res.model
    })
  
  }
  onChangeTaxons(e) {
    let id=e;
    this.productService.GetSubTaxons(id).subscribe((res: any)=> {
      this.subTaxons= res.model
    }) 
  }
  slides = [
    {img: "https://www.youstudy.com/gallery/blog/post/studying-medicine-in-the-uk.jpg"},
    {img: "https://static.arageek.com/wp-content/uploads/3-167.jpg"},
    {img : "https://alkompis.se/lib/ar/2017/08/%D9%85%D9%88%D8%B6%D9%88%D8%B9_%D8%B9%D9%86_%D8%B7%D8%A8%D9%8A%D8%A8_%D8%A7%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86.jpg"}
  ]
 // Slick slider config
 public sliderConfig: any = {
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
};

}
