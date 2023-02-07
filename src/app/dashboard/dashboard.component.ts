import { Component, OnInit } from '@angular/core';
import {OrgDataService} from '../org-data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  

  constructor(private OrgData:OrgDataService) {}
  
  
  orgData: any=[];
  cmsData: any=[];
  statData: any=[];
  appData: any=[];
  intgData: any=[];

 ngOnInit(): void {
    this.OrgData.getAllOrg().subscribe((allData)=>{
      this.orgData=allData;
      console.log(allData)
    })
    this.OrgData.getAllCms().subscribe((allData)=>{
      this.cmsData=allData;
      console.log(allData)
    })
    this.OrgData.getAllStat().subscribe((allData)=>{
      this.statData=allData;
      console.log(allData)
    })
    this.OrgData.getAllApp().subscribe((allData)=>{
      this.appData=allData;
      console.log(allData)
    })
  }
  selectedOrg: any;
  selectedCms: any;
  selectedStatus: any;
  selectedApp: any;
  selectedAppUrl: any;
  selectedCom: any;

  selectedO(){
    console.log(this.selectedOrg)
  }
  selectedC(){
    console.log(this.selectedCms)
  }
  selectedS(){
    console.log(this.selectedStatus)
  }
  selectedA(){
    console.log(this.selectedApp)
  }
  changeA(event:any){
    console.log(event.target.value)
    this.selectedAppUrl=event.target.value
  }
  changeC(event:any){
    console.log(event.target.value)
    this.selectedCom=event.target.value
  }

  onSubmit() {
    alert('Data Saved/Updated ');
  } 
  itemSelected(e:any){
    console.log(e);
  }
}