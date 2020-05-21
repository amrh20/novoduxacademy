import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [MainSliderComponent, CoursesComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
