import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratService } from 'app/service/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  contractForm!:FormGroup;
  constructor(private contratService:ContratService,private fb:FormBuilder) { }

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

    this.contratService.getContrat().subscribe(res=>{
     
      this.contractForm.patchValue({
        employee: res.employee.firstName +" "+ res.employee.lastName , 
        type: res.type, 
        duration: res.duration,
        nature: res.nature,
        startDate:  res.startDate,
        endDate: res.endDate,
        workingCalendar: res.workingCalendar,
       
      })
  
      
      });
 
    }
  }
