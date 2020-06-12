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
import { BarRatingModule } from "ngx-bar-rating";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SearchResultComponent } from './search-result/search-result.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CollectionsComponent } from './collections/collections.component';

@NgModule({
  declarations: [ProductComponent, CartComponent, WishlistComponent, CoursesComponent, CourseDetailsComponent, SearchResultComponent, CollectionsComponent],
  imports: [
    CommonModule,
    productRoutingModule,
    SharedModule,
    SlickCarouselModule,
    BarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatTabsModule
    ]
})
export class ProductModule { }
