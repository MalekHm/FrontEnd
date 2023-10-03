import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'app/service/request.service';
import * as html2pdf from 'html2pdf.js' 

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {
  requets:any=[]
  searchBydateForm!:FormGroup;
  date:any
  constructor(private fb:FormBuilder,private requestService:RequestService) { }

  ngOnInit(): void {
    this.searchBydateForm=this.fb.group({
      start:['',Validators.required],
      end:['',Validators.required]
  
    })
    this.getAll()

    this.date=Date.now()
  
  }

  getAll(){
    this.requestService.getRequests().subscribe(res=>{
      console.log(res);
      
      this.requets=res
    })
  }

  validateRequest(id:any,newStatus){
    this.requestService.confirmed(id,newStatus).subscribe(res=>{
      this.getAll()
    })
    
  }

  searchbyDateHoliday(){
    console.log(this.searchBydateForm.value);
    
  
    this.requestService.filterByDate(this.searchBydateForm.value.start,this.searchBydateForm.value.end).subscribe(res=>{
      this.requets=res
    })
  }
  
  requestReport(): void {  

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
}
