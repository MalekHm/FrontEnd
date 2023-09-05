import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user:any
id:any
 
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.id=localStorage.getItem('id')

    this.userService.getUser().subscribe(res=>{
      this.user=res
      
    })
  }

}
