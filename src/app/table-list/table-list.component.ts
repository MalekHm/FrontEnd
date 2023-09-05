import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
users:any;
currentUser:any;
value:any;
page: number = 1;
count: number = 0;
tableSize:number;
  constructor(private userService:UserService) {

    this.currentUser=localStorage.getItem('id') 
   }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.userService.getListUser().subscribe(res=>{
      this.users=res
      console.log(res);
      this.tableSize=res.length()
      
    })
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getAll();
  }
  delete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(id).subscribe(res=>{
          //this.toast.success('Event deleted with success!!');
      this.getAll()
        })
      }
    })
   }
   valuechange(e:any){
    this.userService.search(this.value).subscribe(res=>{
      this.users=res
    })
}
}
