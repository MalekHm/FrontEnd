import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-internet-subscription',
  templateUrl: './my-internet-subscription.component.html',
  styleUrls: ['./my-internet-subscription.component.css']
})
export class MyInternetSubscriptionComponent implements OnInit {

  internetForm !:FormGroup;
  internetRequest:any
  constructor(private toastService:ToastrService,private userService:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.internetForm=this.fb.group({
      name:['',Validators.required],
      startDate:['',Validators.required],
      comment:['',Validators.required],
    })
    this.getUser()
  }

  getUser(){
    this.userService.getUser().subscribe(res=>{
      this.internetRequest=res.internetRequests
      console.log(this.internetRequest);
      
     })
  }
  onSubmit(){
   this.userService.addInternet(this.internetForm.value).subscribe(res=>{
    this.getUser()
    let from="top"
    let align="right"
    this.toastService.success('Internet request added with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
    this.internetForm.reset()
   })
    
  }
}