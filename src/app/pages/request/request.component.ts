import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requestForm !:FormGroup;
  tasks:any
  constructor(private toastService:ToastrService,private userService:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.requestForm=this.fb.group({
      subject:['',Validators.required],
      description:['',Validators.required],
       
    })
    this.getAll()
  }
getAll(){
  this.userService.getUser().subscribe(res=>{
    this.tasks=res.requests
  })
}
onSubmit(){

  this.userService.addRequest(this.requestForm.value).subscribe(res=>{
    let from="top"
    let align="right"
    this.toastService.success('Request added with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
this.getAll()
  })
}

reset(){
  this.requestForm.reset()
}
}
