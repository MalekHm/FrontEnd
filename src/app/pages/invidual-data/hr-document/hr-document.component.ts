import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'app/service/document.service';

@Component({
  selector: 'app-hr-document',
  templateUrl: './hr-document.component.html',
  styleUrls: ['./hr-document.component.css']
})
export class HrDocumentComponent implements OnInit {
documents:any
  constructor(private documentService:DocumentService) { }

  ngOnInit(): void {
this.documentService.getDocuments().subscribe(res=>{
  this.documents=res
})
  }
  open(){

  }



}
