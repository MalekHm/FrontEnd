import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { AuthService } from './../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {

  userForm!:FormGroup;
  constructor(private authService:AuthService,private fb:FormBuilder,private toastService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      firstName:['',Validators.required],
       lastName:['',Validators.required],
        address:['',Validators.required],
        birthDay:['',Validators.required],
         civil_status:['',Validators.required],
          phone :['',Validators.required],
           email:['',Validators.required],
        role:['',Validators.required]

    })
   
  }
  onSubmit(){

    let role=[];

    role.push(this.userForm.value.role)
    console.log(role);

    let data={
      username:this.userForm.value.username,
      password:this.userForm.value.password,
      firstName:this.userForm.value.firstName,
       lastName:this.userForm.value.lastName,
        address:this.userForm.value.address,
        birthDay:this.userForm.value.birthDay,
         civil_status:this.userForm.value.civil_status,
          phone :this.userForm.value.phone,
           email:this.userForm.value.email,
        role:role
    }
    

    this.authService.addUser(data).subscribe(res=>{
      let from="top"
      let align="right"
      this.toastService.success('User added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
      

      this.userForm.reset()

    },(err)=>{
      console.log(err);
      
    })
    
  }
}
