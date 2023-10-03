import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'app/service/task.service';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';
import * as html2pdf from 'html2pdf.js' 

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskForm !:FormGroup;
  searchBydateForm!:FormGroup;
  tasks:any
  constructor(private taskService:TaskService,private toastService:ToastrService,private userService:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.taskForm=this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
       
    })
    this.searchBydateForm=this.fb.group({
      start:['',Validators.required],
      end:['',Validators.required]
  
    })
    this.getAll()
  }
getAll(){
  this.userService.getUser().subscribe(res=>{
    this.tasks=res.tasks
  })
}
onSubmit(){

  this.userService.addTask(this.taskForm.value).subscribe(res=>{
    let from="top"
    let align="right"
    this.toastService.success('Task added with succes !' , '',{timeOut: 8000,
    closeButton: true,
    enableHtml: true,
    toastClass: "alert alert-info alert-with-icon" ,
    positionClass: 'toast-' + from + '-' +  align})
this.getAll()
this.reset()
  })
}

reset(){
  console.log("reset");
  this.taskForm.value.title=""
  this.taskForm.value.description=""
  this.taskForm.reset()
}
searchbyDateTask(){
  console.log(this.searchBydateForm.value);
  

  this.taskService.filterByDate(this.searchBydateForm.value.start,this.searchBydateForm.value.end).subscribe(res=>{
    this.tasks=res
  })
}

taskReport(): void {  



const option ={
  filename:"Request-report"+Date.now()+".pdf",
  image:{
    type:'jpeg'
  },
  html2canavas:{},
  jsPDF:{orientation:'portrait'}

};

const content : Element=document.getElementById('request_report')
  html2pdf().from(content).set(option).save()

 
}

goToLink(url: string){
  window.open(url, "_blank");
}
}
