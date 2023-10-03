import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingRequestService } from 'app/service/TrainingRequest.service';

@Component({
  selector: 'app-list-training-request',
  templateUrl: './list-training-request.component.html',
  styleUrls: ['./list-training-request.component.css']
})
export class ListTrainingRequestComponent implements OnInit {
id:any
list:any
  constructor(private trainingRequestService:TrainingRequestService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
this.loadRequest()
   
  }
  loadRequest(){
    this.trainingRequestService.getListRequest(this.id).subscribe(res=>{
      this.list=res
      })
  }
  validateRequest(id:any,newStatus){
    this.trainingRequestService.confirmed(id,newStatus).subscribe(res=>{
      this.loadRequest()
    })
    
  }

}
