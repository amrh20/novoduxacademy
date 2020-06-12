import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CoursesComponent } from '../product/courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  
  {
    path: 'product/cart',
    component: CartComponent
  },
  {
    path: 'product/wishlist',
    component: WishlistComponent
  },
  {
    path: 'product/courses/:id',
    component: CoursesComponent
  },
  {
    path: 'product/course/:id',
    component: CourseDetailsComponent
  }, 
  {
    path: 'product/subcourses/:id',
    component: CoursesComponent
  },
  {
    path: 'product/search',
    component: SearchResultComponent
  },
   {
    path : 'product/courses',
    component: CollectionsComponent
   }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productRoutingModule { }