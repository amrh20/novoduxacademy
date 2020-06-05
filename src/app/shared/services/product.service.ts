import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    // Initialize Params Object
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('CategoryId', parameters);
    params = params.append('Page', '0');
    // Make the API call using the new parameters.
    return this.http.get(`${this.apiBaseURL}/GetAllCoursesByCategoryId`, { params: params })
  }
   
  GetTaxons() {
    return this.http.get(`${this.apiBaseURL}/GetCategories`)
  }
  GetSubTaxons(id) {
    // Initialize Params Object
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('CategoryId', id);
    // Make the API call using the new parameters.
    return this.http.get(`${this.apiBaseURL}/GetSubCategories`, { params: params })
  }
}
