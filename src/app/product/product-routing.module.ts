import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CoursesComponent } from '../product/courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CollectionsComponent } from './collections/collections.component';
import { SubCoursesComponent } from './sub-courses/sub-courses.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { SuccessCourseComponent } from './success-course/success-course.component';
import { InstructorComponent } from './instructor/instructor.component';

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
    component: SubCoursesComponent
  },
  {
    path: 'product/search',
    component: SearchResultComponent
  },
   {
    path : 'product/courses',
    component: CollectionsComponent
   },
   {
     path : 'about-us',
     component: AboutCompanyComponent
   },
   {
     path: 'success',
     component: SuccessCourseComponent
   },
   {
     path: 'Instructor/:id', 
     component: InstructorComponent
   }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productRoutingModule { }