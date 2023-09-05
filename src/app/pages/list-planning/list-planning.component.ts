import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HolidayService } from 'app/service/holiday.service';
import { PermissionService } from 'app/service/permission.service';
import { RemoteService } from 'app/service/remote.service';
import * as html2pdf from 'html2pdf.js' 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-planning',
  templateUrl: './list-planning.component.html',
  styleUrls: ['./list-planning.component.css']
})
export class ListPlanningComponent implements OnInit {
holiday:boolean=true
presence:boolean=false
remote:boolean=false
permission:boolean=false
holidays:any=[]
permissions:any=[]
remotes:any=[]
searchBydateForm!:FormGroup;

  constructor(private toastService:ToastrService,private fb:FormBuilder,private holidayService:HolidayService,private remoteService:RemoteService,private permissionService:PermissionService) { }

  ngOnInit(): void {
    this.searchBydateForm=this.fb.group({
      start:['',Validators.required],
      end:['',Validators.required]
  
    })


 this.getAllHoliday()
 this.getAllPermission()
 this.getAllRemote()
  }
  getAllHoliday(){
    this.holidayService.getListHoliday().subscribe(res=>{
 
      
      this.holidays=res
    })
  }

  getAllRemote(){
    this.remoteService.getListRemote().subscribe(res=>{
 
      
      this.remotes=res
    })
  }

  getAllPermission(){
    this.permissionService.getListPermission().subscribe(res=>{
   
      
      this.permissions=res
    })
  }
holidayE(){
  this.holiday=true
  this.remote=false
  this.presence=false
  this.permission=false
}
remoteE(){
  this.remote=true
  this.presence=false
  this.permission=false
  this.holiday=false
}
presenceE(){
  this.presence=true
  this.permission=false
  this.holiday=false
  this.remote=false
}
permissionE(){
  this.permission=true
  this.presence=false
  this.holiday=false
  this.remote=false
}

validateHoliday(id:number){
  this.holidayService.confirmed(id).subscribe(res=>{

    this.getAllHoliday()
    let from="top"
    let align="right"
    this.toastService.success('Holiday request validated with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
  })
}

validateRemote(id:number){
  this.remoteService.confirmed(id).subscribe(res=>{

    this.getAllRemote()
    let from="top"
    let align="right"
    this.toastService.success('Remote request validated with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
  })
}

validatePermission(id:number){
  this.permissionService.confirmed(id).subscribe(res=>{

    this.getAllPermission()
    let from="top"
    let align="right"
    this.toastService.success('Permission request validated with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
  })
}

searchbyDateHoliday(){
  console.log(this.searchBydateForm.value);
  

  this.holidayService.filterByDate(this.searchBydateForm.value.start,this.searchBydateForm.value.end).subscribe(res=>{
    this.holidays=res
  })
}
searchbyDateRemote(){

  this.remoteService.filterByDate(this.searchBydateForm.value.start,this.searchBydateForm.value.end).subscribe(res=>{
    this.holidays=res
  })
}
searchbyDatePermission(){

  this.permissionService.filterByDate(this.searchBydateForm.value.start,this.searchBydateForm.value.end).subscribe(res=>{
    this.holidays=res
  })
}


public holidayReport(): void {  
 
 
 
  const option ={
    filename:"Holiday-report"+Date.now()+".pdf",
    image:{
      type:'jpeg'
    },
    html2canavas:{},
    jsPDF:{orientation:'portrait'}

  };
  
  const content : Element=document.getElementById('holiday_report')
    html2pdf().from(content).set(option).save()

   
}
public permissionReport(): void {  
 
 
 
  const option ={
    filename:"Permission-report"+Date.now()+".pdf",
    image:{
      type:'jpeg'
    },
    html2canavas:{},
    jsPDF:{orientation:'portrait'}

  };
  
  const content : Element=document.getElementById('permission_report')
    html2pdf().from(content).set(option).save()

   
}
public remoteReport(): void {  
 
 
 
  const option ={
    filename:"Remote-report"+Date.now()+".pdf",
    image:{
      type:'jpeg'
    },
    html2canavas:{},
    jsPDF:{orientation:'portrait'}

  };
  
  const content : Element=document.getElementById('remote_report')
    html2pdf().from(content).set(option).save()

   
}
}
