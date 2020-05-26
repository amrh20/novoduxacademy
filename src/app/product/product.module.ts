import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CartComponent } from './cart/cart.component';
import { productRoutingModule } from './product-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [ProductComponent, CartComponent, WishlistComponent, CoursesComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    productRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class ProductModule { }
