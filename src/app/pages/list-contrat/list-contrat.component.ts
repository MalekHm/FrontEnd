import { Component, OnInit } from '@angular/core';
import { ContratService } from 'app/service/contrat.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
contrats:any
  constructor(private contratService:ContratService) { }

  ngOnInit(): void {
    this.contratService.getAll().subscribe(res=>{
      this.contrats=res
    })
  }

}
