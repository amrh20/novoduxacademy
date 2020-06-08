import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    // Initialize Params Object
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('PhoneNumberWithKey', PhoneNumberWithKey);
    params = params.append('Password', Password);
    // Make the API call using the new parameters.
    return this.http.get(`${this.apiBaseURL}/StudentLogin`, { params: params })
  }
}
