import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  listOfCategory;
  checkLang: string
  constructor(private homeService:HomeService,public translate:TranslateService) { }

  ngOnInit(): void {
    this.homeService.getcategoryandSub().subscribe((res:any) => {
      this.listOfCategory= res.model
      this.checkLang= localStorage.getItem('currentLanguage') || 'en'
    })
  }
  loggedIn() {
    if(localStorage.getItem('authToken')) {
      return true
    }
  }
}
