import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrgDataService {

  url= 'http://localhost:8090/';
  constructor(private http:HttpClient) { }
  getAllOrg(){
    return this.http.get(this.url+'org')
  }

  getAllCms(){
    return this.http.get(this.url+'cms')
  }

  getAllStat(){
    return this.http.get(this.url+'status')
  }

  getAllApp(){
    return this.http.get(this.url+'app')
  }
  /*postAllIntgs(){
    return this.http.post(this.url+'app')

  }*/
  
}
