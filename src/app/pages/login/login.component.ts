import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
    
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private authService:AuthService,private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]

    })
  }
  onSubmit(){
    console.log(this.loginForm.value);
    

    if(this.loginForm.valid){

       this.authService.login(this.loginForm.value).subscribe((res:any)=>{
       localStorage.setItem('token',res.accessToken)
      localStorage.setItem('id',res.id);
      localStorage.setItem('role',res.roles[0])
      this.router.navigate(['/dashboard'])
        
      },(error:any)=>{
        console.log(error.error.message);
       
        
      })
//send the object to database
    }else{
      console.log("form is not valid");
       
       
      //throw the error using toaster and with required fields
    }

  }
}
