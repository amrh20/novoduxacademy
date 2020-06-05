import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiBaseURL= `${environment.baseUrl}`
  constructor(private http:HttpClient) { 
    
  }
  getHomeDate() {
    return this.http.get(`${this.apiBaseURL}/GetHomeData`)
  }
  getcategoryandSub() {
    return this.http.get(`${this.apiBaseURL}/GetCategoryWithSubCategories`)
  }
}
