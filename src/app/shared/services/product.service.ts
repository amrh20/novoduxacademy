import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiBaseURL= `${environment.baseUrl}`
  constructor(private http: HttpClient) { }
  // getCourses(id) {
  //  return this.http.get(`${this.apiBaseURL}/GetAllCoursesByCategoryId/${id}`)
  // }
  getTaxonsCourses(parameters) {
    let params = new HttpParams();
    params = params.append('CategoryId', parameters);
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/GetAllCoursesByCategoryId`, { params: params })
  }
  getAllCourses() {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/GetAllCourses`, { params: params, headers: reqHeader })
  }
  getSubTaxonsCourses(parameters) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('SubCategoryId', parameters);
    params = params.append('Page', '0');
    params= params.append('ClassificationId','2')
    return this.http.get(`${this.apiBaseURL}/GetAllCoursesBySubCategoryId`, { params: params, headers: reqHeader })
  }
    
  GetTaxons() {
    return this.http.get(`${this.apiBaseURL}/GetCategories`)
  }
  GetSubTaxons(id) {
    let params = new HttpParams();
    params = params.append('CategoryId', id);
    return this.http.get(`${this.apiBaseURL}/GetSubCategories`, { params: params })
  }

  getCourseDetails(id) {
    let params = new HttpParams();
    params = params.append('CourseId', id);
    return this.http.get(`${this.apiBaseURL}/GetCourseDetails`, { params: params })
  }

  getCourseVideos(id) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('CourseId', id);
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/GetGroupsWithContentsByCourseIdForStudent`, { params: params, headers: reqHeader  })
  }

  getReviews(id) {
    let params = new HttpParams();
    params = params.append('CourseId', id);
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/GetCourseReviews`, { params: params })
  }

 addReviews(CourseRateValue,Comment,CourseId) {
  let authToken = localStorage.getItem("authToken")
  const reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  })
  return this.http.post(`${this.apiBaseURL}/AddReview`,{
    CourseId,
    CourseRateValue,
    Comment
  },{ headers: reqHeader })
 }
  addComment(CourseId,Comment) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    return this.http.post(`${this.apiBaseURL}/AddComment`,{
      CourseId,
      Comment
    }, { headers: reqHeader })
  }

  addreply(CourseCommentId,ReplyText) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    return this.http.post(`${this.apiBaseURL}/AddReply`,{
      CourseCommentId,
      ReplyText
    }, { headers: reqHeader })
  }
  getComments(id) {
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('CourseId', id);
    params = params.append('Page', '0');
    // Make the API call using the new parameters.
    return this.http.get(`${this.apiBaseURL}/GetCourseCommentsWithReplies`, { params: params })
  }

  // add to Favourite
  addFavourite(CourseId) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('CourseId', CourseId);
    return this.http.get(`${this.apiBaseURL}/AddCourseToFavourite`,{params: params, headers: reqHeader })
  }
  AddToCart(CourseId) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('CourseId', CourseId);
    return this.http.get(`${this.apiBaseURL}/AddToCart`,{params: params, headers: reqHeader })
  }
  getMyCart() {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    return this.http.get(`${this.apiBaseURL}/GetMyCart`,{headers: reqHeader })
  }
  deleteFromCart (CourseId) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('CourseId', CourseId);
    return this.http.get(`${this.apiBaseURL}/DeleteFromCart`,{params: params, headers: reqHeader })
  }
  // get Favourite 
  getMyFavorites() {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/GetMyFavorites`,{params: params, headers: reqHeader })
  }

  deleteCourseFromFavourite (CourseId) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('CourseId', CourseId);
    return this.http.get(`${this.apiBaseURL}/DeleteCourseFromFavourite`,{params: params, headers: reqHeader })
  }

  // get all student courses
  studentCourses() {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/GetMyCourses`,{params: params, headers: reqHeader })
  }
  applyPromoCode(PromoCode) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('PromoCode', PromoCode);
    return this.http.get(`${this.apiBaseURL}/ApplyPromoCode`,{params: params, headers: reqHeader })
  }

  checkout(FromWallet) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params= new HttpParams()
    params = params.append('FromWallet', FromWallet);
    return this.http.get(`${this.apiBaseURL}/CheckOut`,{headers: reqHeader, params: params })
  }
  getAllStudentTransactions() {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params= new HttpParams()
    params = params.append('Page', '0');
    return this.http.get(`${this.apiBaseURL}/GetAllStudentTransactions`,{params: params, headers: reqHeader })
  }

  teacherProfileForStudent(TeacherId) {
   let params= new HttpParams()
   params= params.append('TeacherId',TeacherId)
   return this.http.get(`${this.apiBaseURL}/GetTeacherProfileForStudent`,{params: params})
  }
}
