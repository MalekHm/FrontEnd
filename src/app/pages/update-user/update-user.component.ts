import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: any;
  user: any;
  userForm!: FormGroup;
  constructor(private toastService:ToastrService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder
    , private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      birthDay: ['', Validators.required],
      civil_status: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      profil: ['', Validators.required]

    })
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.singleUser(this.id).subscribe(res => {
      console.log(res);
      this.userForm.patchValue({
        username: res.username, 
        firstName: res.firstName, 
        lastName: res.lastName,
        address: res.address,
        birthDay:  res.birthDay,
        civil_status: res.civil_status,
        phone: res.phone,
        email: res.email,
        role:res.roles[0].name,
        profil:res.profil
      })
    })
  }
  onSubmit() {
this.userService.update(this.userForm.value).subscribe(res=>{
  let from="top"
  let align="right"
  this.toastService.success('User updated with succes !' , '',{timeOut: 8000,
  closeButton: true,
  enableHtml: true,
  toastClass: "alert alert-info alert-with-icon" ,
  positionClass: 'toast-' + from + '-' +  align})
})
  }

  date_TO_String(date_Object: Date) {
    // get the year, month, date, hours, and minutes seprately and append to the string.
console.log(date_Object);

     return date_Object.getFullYear() +
      "/" +
      (date_Object.getMonth() + 1) +
      "/" +
      +date_Object.getDate() +
      " " +
      +date_Object.getHours() +
      ":" +
      +date_Object.getMinutes();
 
  }
}
