import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  apiBaseURL= `${environment.baseUrl}`

  constructor(private http:HttpClient) { }

  getmetaData() {
    return this.http.get(`${this.apiBaseURL}/GetMetaData`)
  }
}
