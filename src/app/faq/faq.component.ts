import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
  faqs: any;
  checkLang
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getFAQs().subscribe((res: any) => {
      this.faqs= res.model
    })
    this.checkLang= localStorage.getItem('currentLanguage')
  }

}
