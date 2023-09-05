import { Component, OnInit } from '@angular/core';
import { TrainingRequestService } from 'app/service/TrainingRequest.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-may-training',
  templateUrl: './may-training.component.html',
  styleUrls: ['./may-training.component.css']
})
export class MayTrainingComponent implements OnInit {
  mytrainings:any=[]
  constructor( private trainingRequestService:TrainingRequestService) { }

  ngOnInit(): void {
    this.trainingRequestService.allByUser().subscribe(res=>{
      this.mytrainings=res.training

    })
     
  }

}
