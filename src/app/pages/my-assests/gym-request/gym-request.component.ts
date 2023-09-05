import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gym-request',
  templateUrl: './gym-request.component.html',
  styleUrls: ['./gym-request.component.css']
})
export class GymRequestComponent implements OnInit {
  gymForm !: FormGroup;
  gymRequest:any
  constructor(private toastService:ToastrService,private userService: UserService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.gymForm = this.fb.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      comment: ['', Validators.required],
    })
    this.getUser()
  }

  getUser(){
    this.userService.getUser().subscribe(res=>{
      this.gymRequest=res.gymRequests
     })
  }
  onSubmit(){
 
    
   this.userService.addGym(this.gymForm.value).subscribe(res=>{
    this.getUser();
    let from="top"
    let align="right"
    this.toastService.success('Gym request added with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
    this.gymForm.reset()
   })
    
  }
}