import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratService } from 'app/service/contrat.service';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  users:any=[]
  contractForm!:FormGroup;
  constructor(private toastService:ToastrService,private userService:UserService,private contratService:ContratService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contractForm=this.fb.group({
      employee:['',Validators.required],
      type:['',Validators.required],
      duration:['',Validators.required],
      nature:['',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      workingCalendar:['',Validators.required]
         
    })

    this.userService.getListUser().subscribe(res=>{
      console.log(res);
      
      res.forEach(element => {
        console.log(element.roles[0]);
        
        if(element.roles[0].name=='employee')
       { 
        this.users.push(element)
      }
      })
      console.log(this.users);
      
      });
 
 
  }
  onSubmit(){
     console.log("submit");
     

    this.contratService.addContrat(this.contractForm.value).subscribe(res=>{
      let from="top"
      let align="right"
      this.toastService.success('Contract added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
    })
    
  }
}
