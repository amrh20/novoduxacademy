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
  pathImage="http://novoduxapi.native-tech.co/Images/StudentImages/"
  profileImg
  checkedlocal
  notifications
  checkLang
  listOfCategory
  showDrop:boolean
  showSide: boolean
  constructor(private homeService:HomeService,public translate:TranslateService) {
    this.currentLang= localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)
   }

   changeLang(lang: string) {
    this.translate.use(lang)
    localStorage.setItem('currentLanguage',lang)
    location.reload();
   } 
   showDropdown() {
     this.showDrop =! this.showDrop
   }
   showMenu() {
   this.showSide= !this.showSide
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
    this.homeService.getCategories().subscribe((res:any) => {
      this.listOfCategory= res.model
    })
    // localStorage.setItem('currentLanguage','en')
    // this.changeLang
    // this.profileImg= localStorage?.getItem('ProfileImage')
    // if (localStorage.getItem("ProfileImage") === null) {
    //   this.checkedlocal= true
    // }
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
    this.homeService.notifcation().subscribe((res: any) => {
      this.notifications= res.model
    })
  }
 loggedIn() {
   if(localStorage.getItem('authToken')) {
     return true
   }
 }
 logout() {
   localStorage.removeItem('authToken')
   localStorage?.removeItem('ProfileImage')
 }
}
