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
  totalHour:any
  constructor(private toastService:ToastrService,private userService:UserService,private fb:FormBuilder) { }

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
  }

  getUser(){
    this.userService.getUser().subscribe(res=>{
      this.presenceRequests=res.gymRequests
     })
  }
  onSubmit(){
  // this.userService.addPresence(this.presenceForm.value).subscribe(res=>{
    //this.getUser()
   //})
 
    
    this.userService.addPresence(this.presenceForm.value).subscribe(res=>{
      this.presenceForm.reset()
      this.getUser()
      let from="top"
      let align="right"
      this.toastService.success('Pressence added with succes !' , '',{timeOut: 8000,
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

