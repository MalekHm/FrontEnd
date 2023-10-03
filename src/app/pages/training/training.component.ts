import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trainingervice } from 'app/service/training.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  @ViewChild('myModal', { static: false }) myModal: ElementRef;
  elm: HTMLElement;
  trainings:any=[]
  trainingForm !:FormGroup;
  role:any
  constructor(private toastService:ToastrService,private trainingService:Trainingervice,private fb:FormBuilder) { 
    this.role=localStorage.getItem('role')
  }

  ngOnInit(): void {
    this.trainingForm=this.fb.group({
      domain:['',Validators.required],
      theme:['',Validators.required],
      pre_requires:['',Validators.required],
      duration:['',Validators.required],
      unit:['',Validators.required],
      description:['',Validators.required],
      type:['Type',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      certification:['Certification',Validators.required],
      target:['',Validators.required],
   
      
})
  this.getAll()
  }
  ngAfterViewInit(): void {
     this.elm = this.myModal.nativeElement as HTMLElement;
  }
  close(): void {
      this.elm.classList.remove('show');
      setTimeout(() => {
        this.elm.style.width = '0';
      }, 75);
  }
  open(): void {
      this.elm.classList.add('show');
      this.elm.style.width = '100vw';
  }
  getAll(){
this.trainingService.getAll().subscribe(res=>{
  this.trainings=res
  console.log(this.trainings);
  
})
  }
  onSubmit(){
    console.log(this.trainingForm.value);
    this.trainingService.addTraining(this.trainingForm.value).subscribe(res=>{
       let from="top"
      let align="right"
      this.toastService.success('Training added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
      this.close();
      this.getAll()
    })
  }

  membre(id:number){
    this.trainingService.requestTrainings(id).subscribe(res=>{
      let from="top"
      let align="right"
      this.toastService.success('Training added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
    },(error=>{
      let from="top"
      let align="right"
      this.toastService.error('You are already send request!' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})

    }))
  }
}
