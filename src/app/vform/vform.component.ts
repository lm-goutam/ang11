import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vform',
  templateUrl: './vform.component.html',
  styleUrls: ['./vform.component.css']
})
export class VformComponent {
  name = 'Angular';  

  constructor(private http:HttpClient){}

  ngOnInit():void{
    this.callapi()
  }

//call json through httpclient
  callapi(){
    this.http.get("./assets/data.json").subscribe(res=>{
      console.log(res)
    })

   
  }
}
