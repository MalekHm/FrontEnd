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
file!: File;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;
message: string;
imageName: any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.id=localStorage.getItem('id')

    this.userService.getUser().subscribe(res=>{
      this.user=res
        
    if(this.user.profilImage!=''){
      console.log("ok");
      
      this.getImage()
    } 
    })
    console.log(this.user);
    
    console.log(this.user?.profilImage);
  
  }

  selectFile(event: any) {
    this.file =event.target.files[0];
    console.log(this.file);
    
    const formData: FormData = new FormData();
    
    formData.append('file', this.file);
    formData.append('id', localStorage.getItem('id') );
    this.userService.uploadAvatar(formData).subscribe(res=>{
      console.log(res);
      this.user=res
      
    })
  }
 //Gets called when the user clicks on retieve image button to get the image from back end
 getImage() {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.userService.getProfilImage(this.user.profilImage).subscribe(
      res => {
        console.log(res);
        
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    );
}
}
