import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent implements OnInit {
  aboutUs: any;
  checkLang
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getAboutus().subscribe((res: any) => {
      this.aboutUs= res.model
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'

  }


}
