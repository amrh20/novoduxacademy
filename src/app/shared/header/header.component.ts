import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logged: boolean
  currentLang: string;

  constructor(private homeService:HomeService,public translate:TranslateService) {
    this.currentLang= localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)
   }

   changeLang(lang: string) {
    location.reload();
    this.translate.use(lang)
    localStorage.setItem('currentLanguage',lang)
   } 

   public featureConfig: any= {
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  }
  ngOnInit(): void {
    
  }
 loggedIn() {
   if(localStorage.getItem('authToken')) {
     return true
   }
 }
 logout() {
   localStorage.removeItem('authToken')
 }
}
