import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { homeRoutingModule } from './home-routing.module';
import { RecommendCoursesComponent } from './recommend-courses/recommend-courses.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [MainSliderComponent, CoursesComponent, HomeComponent, RecommendCoursesComponent],
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
