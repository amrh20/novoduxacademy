import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { homeRoutingModule } from './home-routing.module';
import { RecommendCoursesComponent } from './recommend-courses/recommend-courses.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductModule } from '../product/product.module';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { OffersComponent } from './offers/offers.component';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';

@NgModule({
  declarations: [MainSliderComponent, 
                 HomeComponent, RecommendCoursesComponent, 
                 TimelineComponent, AboutUsComponent, AdvertisementsComponent, 
                 OffersComponent, CategoriesHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    homeRoutingModule,
    ProductModule,
    SlickCarouselModule
  ],
  exports: []
})
export class HomeModule { }
