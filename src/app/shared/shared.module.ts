import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports:[HeaderComponent,SlickCarouselModule]
})
export class SharedModule { 

}
