import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseURL= `${environment.baseUrl}`

  constructor(private http:HttpClient) { }
  register(Name :string,PhoneKey:string,PhoneNumber,CategoryId:string,Password:string,ConfirmPassword:string) {
    return this.http.post(`${this.apiBaseURL}/Register`,{
      Name,
      PhoneKey,
      PhoneNumber,
      CategoryId,
      Password,
      ConfirmPassword
    })
  }

}
