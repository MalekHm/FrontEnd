import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  remoteForm !:FormGroup;
  remoteRequests:any
  constructor(private toastService:ToastrService,private userService:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.remoteForm=this.fb.group({
      start:['',Validators.required],
      end:['',Validators.required],
      comment:['',Validators.required],
    })
    this.getUser()
  }

  getUser(){
    this.userService.getUser().subscribe(res=>{
      this.remoteRequests=res.remotes
     })
  }
  onSubmit(){
   this.userService.addRemote(this.remoteForm.value).subscribe(res=>{
    let from="top"
    let align="right"
    this.toastService.success('Remote request added with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
    this.remoteForm.reset()
    this.getUser()
   })
    
  }
}

