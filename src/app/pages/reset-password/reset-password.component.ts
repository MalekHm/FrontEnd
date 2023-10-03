import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!:FormGroup;
  token:any
  constructor(private toastService:ToastrService,private route: ActivatedRoute,private userService:UserService,private fb:FormBuilder,
    private router:Router) { }
  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    this.resetForm=this.fb.group({
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }
  onSubmit(){
    
    if(this.resetForm.valid&&(this.resetForm.value.newPassword.value==this.resetForm.value.confirmPassword.value)){
    this.userService.resetPassword(this.token,this.resetForm.value.newPassword).subscribe(res=>{
      console.log(res);  
      let from="top"
      let align="right"
      this.toastService.success('Password reseted with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})    
      this.router.navigate(['/'])
    })
  }else{

  }
  }
}
