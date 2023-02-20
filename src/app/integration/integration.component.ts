import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrgDataService } from '../org-data.service';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit{
  constructor(private OrgData:OrgDataService, private router: Router) {}

  intgData: any=[];
  orgData:any=[];
  org:any=[];
  cmsData:any=[];
  cms:any=[];
  statusData:any=[];
  status:any=[];
  appData:any=[];
  app:any=[];
  app1:any=[];
  temp:any=[];


  ngOnInit(): void {
    this.OrgData.getAllIntgs().subscribe((allData)=>{
      this.intgData=allData;
      console.log(allData)
    });
    this.OrgData.getAllOrg().subscribe((allData)=>{
      this.orgData=allData;
      console.log(allData)      
      this.findOrgName()
    });
    this.OrgData.getAllCms().subscribe((allData)=>{
      this.cmsData=allData;
      console.log(allData)
      this.findCmsName()
    });
    this.OrgData.getAllStat().subscribe((allData)=>{
      this.statusData=allData;
      console.log(allData)
      this.findStatusName()
    });
    this.OrgData.getAllApp().subscribe((allData)=>{
      this.appData=allData;
      console.log(allData)
      this.findAppName()
    });
    
  }
  updateItem(i_id?:any){
    console.log("i_id=",i_id);
      this.OrgData.getId(i_id);
      this.router.navigate(['/intg-update']);      
  }
  deleteItem(intg:any){
    this.OrgData.deleteIntgsById(intg.I_id)
        .subscribe(intg => {
          console.log(intg)
        });
        window.location.href="/integration";
  }
  findOrgName(){
    for(let intga of this.intgData){
      for(let val of this.orgData){
        if(val.Org_id==intga.I_org)
        {
          this.org.push(val.Org_name);
        }
      }
    } 
    console.log(this.org);
  }
  findCmsName(){
    for(let intga of this.intgData){
      for(let val of this.cmsData){
        if(val.Cms_id==intga.I_cms)
        {
          this.cms.push(val.Cms_name);
        }
      }
    } 
    console.log(this.cms);
  }
  findStatusName(){
    for(let intga of this.intgData){
      for(let val of this.statusData){
        if(val.Stat_id==intga.I_status)
        {
          this.status.push(val.Stat_name);
        }
      }
    } 
    console.log(this.status);
  }
  findAppName(){
    for(let intga of this.intgData){
      this.temp=[]
      this.app1 = JSON.parse(intga.I_app);
      for(var i of this.app1){
        
        for(let val of this.appData ){
          if(val.App_id==i)
          {
            this.temp.push(val.App_name); //' '.concat(val.App_name.toString(),temp.toString());
            console.log(this.temp)
          }
          
        }
      }
      this.app.push(this.temp);
    } 
    console.log(this.app);
  }
}
