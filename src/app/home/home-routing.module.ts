import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { MainSliderComponent } from './main-slider/main-slider.component';

const routes: Routes = [
  
  {
    path: '',
    component: CoursesComponent
  },
  {
      path: '',
      component: MainSliderComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homeRoutingModule { }