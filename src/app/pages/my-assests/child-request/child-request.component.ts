import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-child-request',
  templateUrl: './child-request.component.html',
  styleUrls: ['./child-request.component.css']
})
export class ChildRequestComponent implements OnInit {

  childForm !:FormGroup;
  childRequest:any
  constructor(private toastService:ToastrService,private userService:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.childForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      age:['',Validators.required],
      comment:['',Validators.required],
    })
    this.getUser()
  }

  getUser(){
    this.userService.getUser().subscribe(res=>{
      this.childRequest=res.childRequestList
     })
  }
  onSubmit(){
   this.userService.addChild(this.childForm.value).subscribe(res=>{
    this.getUser()
    let from="top"
    let align="right"
    this.toastService.success('child request added with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
    this.childForm.reset()
   })
    
  }
}
