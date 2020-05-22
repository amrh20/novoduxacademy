import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CartComponent } from './cart/cart.component';
import { productRoutingModule } from './product-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [ProductComponent, CartComponent, WishlistComponent],
  imports: [
    CommonModule,
    productRoutingModule
  ]
})
export class ProductModule { }
