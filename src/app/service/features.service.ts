import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  constructor(private http:HttpClient) { }
  
  featuresApi = 'http://localhost:3000/features';

  // Get Api Method

  getfeaturesData(){
    return this.http.get(this.featuresApi)
  }

  // Post Api Method

  postfeaturesData(data:any){
    return this.http.post(this.featuresApi, data);
  }
}
