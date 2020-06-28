import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  listOfCategory;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getcategoryandSub().subscribe((res:any) => {
      this.listOfCategory= res.model
    })
  }
  attributeChange(inputVal) {
    console.log(inputVal)
  }
}
