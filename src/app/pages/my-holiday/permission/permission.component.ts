import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PermissionService } from 'app/service/permission.service';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  permissionForm !:FormGroup;
  permissionRequests:any
  constructor(private toastService:ToastrService,private userService:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.permissionForm=this.fb.group({
      start:['',Validators.required],
      end:['',Validators.required],
      comment:['',Validators.required],
    })
    this.getUser()
  }

  getUser(){
    this.userService.getUser().subscribe(res=>{
      this.permissionRequests=res.permissions
     })
  }
  onSubmit(){
   this.userService.addPermission(this.permissionForm.value).subscribe(res=>{
    this.getUser()
    this.permissionForm.reset()
    let from="top"
    let align="right"
    this.toastService.success('Permission request added with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
   })
    
  }
}

