import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CoursesComponent } from '../product/courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'courses/:id',
    component: CoursesComponent
  },
  {
    path: 'course/:id',
    component: CourseDetailsComponent
  }, 
  {
    path: 'subcourses/:id',
    component: CoursesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productRoutingModule { }