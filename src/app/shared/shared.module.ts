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
import { TranslateModule, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler } from '@ngx-translate/core';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent, CourseItemComponent, FilterComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    BarRatingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule
    ],
  exports:[HeaderComponent,SlickCarouselModule,FooterComponent,CourseItemComponent,
    FilterComponent,TranslateModule,SearchComponent,ClickOutsideModule]
})
export class SharedModule { 

}
