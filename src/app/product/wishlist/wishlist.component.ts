import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  myFavorites;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getMyFavorites().subscribe((res: any) => {
      this.myFavorites =res.model
      console.log(this.myFavorites)
    })
  }

}
