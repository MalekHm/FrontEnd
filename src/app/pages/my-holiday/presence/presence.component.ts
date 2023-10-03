import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PermissionService } from 'app/service/permission.service';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {
  presenceForm !:FormGroup;
  presenceRequests:any
  totalHour:any;
  toDate;
  constructor(public datePipe: DatePipe,private toastService:ToastrService,private userService:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.presenceForm=this.fb.group({ 
      start:['',Validators.required],
      end:['',Validators.required],
      comment:['',Validators.required],
      startHour:['',Validators.required],
      endHour:['',Validators.required],
      project:['',Validators.required],
      totalHour:['',Validators.required],
    })
    this.getUser()
   
    this.presenceForm.get('start').patchValue(this.formatDate(new Date()));
    this.presenceForm.get('end').patchValue(this.formatDate(new Date()));
    let currentDateTime =this.datePipe.transform((new Date), 'hh:mm');
    if(localStorage.getItem('startHour')){
      this.presenceForm.get('startHour').patchValue(localStorage.getItem('startHour'));

    }else{
      localStorage.setItem('startHour',this.datePipe.transform((new Date), 'hh:mm'))
      this.presenceForm.get('startHour').patchValue(this.datePipe.transform((new Date), 'hh:mm'));
    }

console.log(localStorage.getItem('endHour'));

    if(localStorage.getItem('startHour')){
      this.presenceForm.get('endHour').patchValue(localStorage.getItem('startHour'));
      this.presenceForm.get('endHour').patchValue(this.datePipe.transform((new Date), 'hh:mm'));

      var time1 =  this.presenceForm.value.startHour.split(":");
      var time2 = this.presenceForm.value.endHour.split(":");
      let res = time2[0]-time1[0]
      console.log(res);
      this.presenceForm.get('totalHour').patchValue(res);

    }
    
  }

  getUser(){
    this.userService.getUser().subscribe(res=>{
      this.presenceRequests=res.presences
     })
  }
  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  onSubmit(){
  // this.userService.addPresence(this.presenceForm.value).subscribe(res=>{
    //this.getUser()
   //})
 localStorage.removeItem('startHour')
    
    this.userService.addPresence(this.presenceForm.value).subscribe(res=>{
      this.presenceForm.reset()
      this.getUser()
      let from="top"
      let align="right"
      this.toastService.success('Presence added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
    })
  
  }
  changeEndHour(e:any){
    if(this.presenceForm.value.endHour != '' && this.presenceForm.value.startHour != ''){
      console.log(this.presenceForm.value.endHour);
    var time1 =  this.presenceForm.value.endHour .split(":");
var time2 = this.presenceForm.value.startHour.split(":");
 
    this.presenceForm.value.totalHour=time1[0]-time2[0]
      this.presenceForm.patchValue({totalHour:time1[0]-time2[0]})
    }
  
    
  }

  changeStartHour(e:any){
    if(this.presenceForm.value.endHour != '' && this.presenceForm.value.startHour != ''){
      console.log(this.presenceForm.value.endHour);
    var time1 =  this.presenceForm.value.endHour .split(":");
var time2 = this.presenceForm.value.startHour.split(":");
 
    this.presenceForm.value.totalHour=time1[0]-time2[0]
      this.presenceForm.patchValue({totalHour:time1[0]-time2[0]})
    }
  
    
  }
}

