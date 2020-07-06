import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { share } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiBaseURL= `${environment.baseUrl}`
  constructor(private http:HttpClient) { 
    
  }
  getHomeDate() {
    return this.http.get(`${this.apiBaseURL}/GetHomeData`).pipe(share())
  }
  getcategoryandSub() {
    return this.http.get(`${this.apiBaseURL}/GetCategoryWithSubCategories`)
  }
  getAboutus() {
    return this.http.get(`${this.apiBaseURL}/GetAboutUs`)
  }
  addComplaintOrSuggestion(Message,ComplaintOrSuggestionTypeId) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  })
    return this.http.post(`${this.apiBaseURL}/AddComplaintOrSuggestion`, {Message,ComplaintOrSuggestionTypeId},{ headers: reqHeader })
  }
  getAdvertisementDetails() {
    let params = new HttpParams();
    params = params.append('Id', '1');
    return this.http.get(`${this.apiBaseURL}/GetAdvertisementDetails`,{params: params})
  }
  addAdvertisementOrder(Message,AdvertisementId) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  })
    return this.http.post(`${this.apiBaseURL}/AddAdvertisementOrder`, {Message,AdvertisementId},{ headers: reqHeader })
  }
  getAdvertisementOrder() {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  })
    let params = new HttpParams();
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/GetAdvertisementOrder`,{params: params,headers: reqHeader })
  }
  getFAQs() {
    return this.http.get(`${this.apiBaseURL}/GetFAQs`)
  }
  notifcation() {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  })
    let params = new HttpParams();
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/GetStudentNotifications`,{params: params,headers: reqHeader})
  }
}
