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
    return this.http.get(`${this.apiBaseURL}/GetHomeData`)
  }

  getcategoryandSub() {
    let params = new HttpParams();
    params = params.append('Page', '0');
    params= params.append('ClassificationId','2')
    return this.http.get(`${this.apiBaseURL}/GetCategoryWithSubCategories`,{params: params})
  }

  getCategories() {
    let params = new HttpParams();
    params = params.append('Page', '0');
    params= params.append('ClassificationId','2')
    return this.http.get(`${this.apiBaseURL}/GetCategories`,{params: params})
  }

  getSubCategories(CategoryId) {
    let params = new HttpParams();
    params = params.append('Page', '0');
    params= params.append('CategoryId',CategoryId)
    params= params.append('ClassificationId','2')
    return this.http.get(`${this.apiBaseURL}/GetSubCategories`,{params: params})
  }

  getAllCoursesBySubCategoryId (SubCategoryId) {
    let params = new HttpParams();
    params = params.append('Page', '0');
    params= params.append('SubCategoryId',SubCategoryId)
    params= params.append('ClassificationId','2')
    return this.http.get(`${this.apiBaseURL}/GetAllCoursesBySubCategoryId`,{params: params})
  }

 getCourseDetails (CourseId) {
  let params = new HttpParams();
  params= params.append('CourseId',CourseId)
  return this.http.get(`${this.apiBaseURL}/GetCourseDetails`,{params: params})
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

  search(Word) {
    
    let params = new HttpParams();
    params = params.append('Word', Word);
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/SearchInCourses`,{params: params})
  }
}
