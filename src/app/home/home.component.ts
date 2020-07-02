import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../shared/services/home.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiBaseURL=`${environment.baseUrl}`;

  listOfCategory;
  constructor(private http:HttpClient,private homeService:HomeService) { 
  }
  
  ngOnInit(): void {}

}
