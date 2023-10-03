import { Component, OnInit } from '@angular/core';
 import Swal from 'sweetalert2';
import * as html2pdf from 'html2pdf.js'
import { ContratService } from 'app/service/contrat.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  contracts:any;
  currentUser:any;
  value:any;
  page: number = 1;
  count: number = 0;
  tableSize:number;
  date:any
    constructor(private contratService:ContratService) {
   
     }
  
    ngOnInit() {
      this.getAll()
    }
  
    getAll(){
      this.contratService.getAll().subscribe(res=>{
        this.contracts=res
        console.log(res);
        this.tableSize=res.length()
        
      })
    }
    onTableDataChange(event: any) {
      this.page = event;
      this.getAll();
    }
     valuechange(e:any){
      this.contratService.search(this.value).subscribe(res=>{
        this.contracts=res
      })
  }
  
  public contractList(): void {
  
  
  
    const option = {
      filename: "Contract-liste" + Date.now() + ".pdf",
      image: {
        type: 'jpeg'
      },
      html2canavas: {},
      jsPDF: { orientation: 'portrait' }
  
    };
  
    const content: Element = document.getElementById('list_contract')
    html2pdf().from(content).set(option).save()
  
  
  }
  }
  