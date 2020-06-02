import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseURL= `${environment.baseUrl}`

  constructor(private http:HttpClient) { }
  register(Name,PhoneKey,phoneNumber,CategoryId,Password,ConfirmPassword) {
    return this.http.post(`${this.apiBaseURL}/Register`,{
      Name,
      PhoneKey,
      phoneNumber,
      CategoryId,
      Password,
      ConfirmPassword
    })
  }
}
