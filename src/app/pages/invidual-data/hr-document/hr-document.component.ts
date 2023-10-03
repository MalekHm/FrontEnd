import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocumentService } from 'app/service/document.service';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-hr-document',
  templateUrl: './hr-document.component.html',
  styleUrls: ['./hr-document.component.css']
})
export class HrDocumentComponent implements OnInit {

  @ViewChild('myModal', { static: false }) myModal: ElementRef;
  elm: HTMLElement;
  documents:any=[]
  documentForm !:FormGroup;
  selectedFiles:any;
role:any
  constructor(private toastService:ToastrService,private documentService:DocumentService,private fb:FormBuilder) {
    this.role=localStorage.getItem('role')
   }

  ngOnInit(): void {
    this.documentForm=this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      approyedDate:['',Validators.required],
      expirationDate:['',Validators.required],
      codePolicy:['',Validators.required],
      type:['',Validators.required],
      
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
    console.log("oppp");
      this.elm.classList.add('show');
      this.elm.style.width = '100vw';
  }

  selectFile(event) {
    this.selectedFiles = event.target.files[0];
  }
  
  getAll(){
    this.documentService.getAll().subscribe(res=>{
      this.documents=res
      
    })
      }
      onSubmit(){
 
        
        const formData: FormData = new FormData();

    formData.append('file', this.selectedFiles);
    formData.append('title', this.documentForm.value.title);
    formData.append('description', this.documentForm.value.description);
    formData.append('approyedDate', this.documentForm.value.approyedDate);
    formData.append('expirationDate', this.documentForm.value.expirationDate);
    formData.append('codePolicy', this.documentForm.value.codePolicy);
    formData.append('type', this.documentForm.value.type);
    this.documentService.newDocument(formData).subscribe(res=>{
      let from="top"
      let align="right"
      this.toastService.success('Document added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
      this.getAll()
      this.close()
    })
      }

      downloadFile(filename: any): void {
        this.documentService.download(filename).subscribe(blob => saveAs(blob, filename));
      }
}

 
