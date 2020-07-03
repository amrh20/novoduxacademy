import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  listOfCategory;
  checkLang
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getcategoryandSub().subscribe((res:any) => {
      this.listOfCategory= res.model
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }

  attributeChange(inputVal) {
  }
}
