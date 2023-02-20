import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrgDataService {

  url= 'http://localhost:8010/';

  i_Id?:number;

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
  postAllIntgs(integration: any){

    return this.http.post(this.url+'intgs',integration)

  }
  getAllIntgs(){
    return this.http.get(this.url+'intgs')
  }
  deleteIntgsById(i_id: any){
    return this.http.delete(this.url+'intgs/'+i_id)
  }
  getId(getId?: number){
    this.i_Id=getId;
  }
  updateIntgsById(i_id:any,integration: any){

    return this.http.put(this.url+'intgs/'+this.i_Id,integration)

  }

  getIntgsById(){
    return this.http.get(this.url+'intgs/'+this.i_Id)
  }
  
}
