import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HolidayService } from 'app/service/holiday.service';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  holidayForm !:FormGroup;
  holidayRequests:any
  constructor(private toastService:ToastrService,private userService:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.holidayForm=this.fb.group({
      start:['',Validators.required],
      end:['',Validators.required],
      comment:['',Validators.required],
    })
    this.getUser()
  }

  getUser(){
    this.userService.getUser().subscribe(res=>{
      this.holidayRequests=res.holidays
     })
  }
  onSubmit(){
   this.userService.addHoliday(this.holidayForm.value).subscribe(res=>{
    let from="top"
    let align="right"
    this.toastService.success('Holiday request added with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
    this.getUser()
    this.holidayForm.reset()
   })
    
  }
}