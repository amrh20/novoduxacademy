import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseURL= `${environment.baseUrl}`

  constructor(private http:HttpClient) { }
  register(Name :string,PhoneKey:string,PhoneNumber,
    CategoryId:string,Password:string,ConfirmPassword:string,Email: any) {
    return this.http.post(`${this.apiBaseURL}/Register`,{
      Name,
      PhoneKey,
      PhoneNumber,
      CategoryId,
      Password,
      ConfirmPassword,
      Email
    })
  }
 
  verifyAccount(PhoneKey,Phone,vcode) {
    // Initialize Params Object
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('PhoneKey', PhoneKey);
    params = params.append('Phone', Phone);
    params = params.append('vcode', vcode);
    // Make the API call using the new parameters.
    return this.http.get(`${this.apiBaseURL}/Verify`, { params: params })
  }
  login(PhoneNumberWithKey,Password) {
    let params = new HttpParams();
    params = params.append('PhoneNumberWithKey', PhoneNumberWithKey);
    params = params.append('Password', Password);
    return this.http.get(`${this.apiBaseURL}/StudentLogin`, { params: params })
  }
  verify(PhoneNumber) {
    let params = new HttpParams();
    params = params.append('PhoneNumber', PhoneNumber);
    return this.http.get(`${this.apiBaseURL}/ForgetPassword`, { params: params })
  }

  changePassword(CurrentPassword,NewPassword,ConfirmNewPassword) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    let params = new HttpParams();
    params = params.append('CurrentPassword', CurrentPassword);
    params = params.append('NewPassword', NewPassword);
    params = params.append('ConfirmNewPassword', ConfirmNewPassword);
    return this.http.get(`${this.apiBaseURL}/ChangePassword`, { params: params ,  headers: reqHeader})
  }
  // EditProfile(Name,Email) {
  //  return this.http.post(`${this.apiBaseURL}/Email`, {
  //   Name,
  //   Email
  //  })    
  // }
  getStudentProfile() {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    return this.http.get(`${this.apiBaseURL}/GetStudentProfile`, { headers: reqHeader})
  }
  // editProfile
  editProfile(Name,CategoryId,Email,GenderId) {
    let authToken = localStorage.getItem("authToken")
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
    return this.http.post(`${this.apiBaseURL}/EditProfile`, {
      Name,
      CategoryId,
      Email,
      GenderId
    },{headers: reqHeader})
  }
}
