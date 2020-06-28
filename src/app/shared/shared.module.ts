import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent, CourseItemComponent, FilterComponent],
  imports: [
    CommonModule,
    RouterModule,
    BarRatingModule
  ],
  exports:[HeaderComponent,SlickCarouselModule,FooterComponent,CourseItemComponent,FilterComponent]
})
export class SharedModule { 

}
