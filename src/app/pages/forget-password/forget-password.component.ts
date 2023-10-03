import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm!:FormGroup;
  constructor(private toastService:ToastrService,private userService:UserService,private fb:FormBuilder,
    private router:Router) { }
  ngOnInit(): void {
    this.forgetForm=this.fb.group({
      email:['',Validators.required]
    })
  }
  onSubmit(){
    console.log("res");
    
    this.userService.forgetPassword(this.forgetForm.value.email).subscribe(res=>{
      let from="top"
      let align="right"
      this.toastService.success('Link to reset your password sent with success !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})    
    })
  }
}
