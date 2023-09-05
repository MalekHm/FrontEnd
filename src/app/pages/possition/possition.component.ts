import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PositionService } from 'app/service/position.service';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-possition',
  templateUrl: './possition.component.html',
  styleUrls: ['./possition.component.css']
})
export class PossitionComponent implements OnInit {
  @ViewChild('myModal', { static: false }) myModal: ElementRef;
  elm: HTMLElement;
  positions:any=[]
  positionForm !:FormGroup;
  constructor(private toastService:ToastrService,private positionService:PositionService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.positionForm=this.fb.group({
      stafing_request:['',Validators.required],
      open_expatriation:['',Validators.required],
      description:['',Validators.required],
      company:['',Validators.required],
      assignement_date:['',Validators.required],
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
    this.positionService.getAll().subscribe(res=>{
      this.positions=res
    })
      }
      onSubmit(){
        console.log(this.positionForm.value);
        this.positionService.addPosition(this.positionForm.value).subscribe(res=>{
          this.getAll()
          let from="top"
          let align="right"
          this.toastService.success('Position added with succes !' , '',{timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon" ,
          positionClass: 'toast-' + from + '-' +  align})
          this.positionForm.reset()
          this.close()
        })
      }
}
