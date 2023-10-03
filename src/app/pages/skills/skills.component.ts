import { Component, OnInit } from '@angular/core';
import { Education, Experience, Resume, Skill } from '../../interface/interface';
import { UserService } from 'app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  resume = new Resume();
  userInformations:any
  degrees = ['Master\'s degree', 'License', 'Engineer'];

  constructor(private toastService:ToastrService,private userService:UserService) {
    this.getUser()
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
    if (!this.resume.experiences || this.resume.experiences.length === 0) {
      this.resume.experiences = [];
     
      this.resume.experiences.push(new Experience());
    }
    if (!this.resume.educations || this.resume.educations.length === 0) {
      
      this.resume.educations = [];
      this.resume.educations.push(new Education());
    }
    if (!this.resume.skills || this.resume.skills.length === 0) {
      this.resume.skills = [];
      this.resume.skills.push(new Skill());
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
  }

  addExperience() {
    this.resume.experiences.push(new Experience());
  }

  addEducation() {
    this.resume.educations.push(new Education());
  }
 


  resetForm() {
    this.resume = new Resume();
  }

  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));

    return {
      content: 'This is a sample PDF'
    };
  }

 
  getUser(){
    this.userService.getUser().subscribe(res=>{
      this.userInformations=res
      console.log(this.userInformations);
      
     })
  }

  addSkill() {
    this.resume.skills.push(new Skill());
  }

  getExperienceObject(experiences: Experience[]) {

    const exs = [];

    experiences.forEach(experience => {
      exs.push(
        [{
          columns: [
            [{
              text: experience.jobTitle,
              style: 'jobTitle'
            },
            {
              text: experience.employer,
            },
            {
              text: experience.jobDescription,
            }],
            {
              text: 'Experience : ' + experience.experience + ' Months',
              alignment: 'right'
            }
          ]
        }]
      );
    });

    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    };
  }

  getEducationObject(educations: Education[]) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'Degree',
            style: 'tableHeader'
          },
          {
            text: 'College',
            style: 'tableHeader'
          },
          {
            text: 'Passing Year',
            style: 'tableHeader'
          },
          {
            text: 'Result',
            style: 'tableHeader'
          },
          ],
          ...educations.map(ed => {
            return [ed.degree, ed.universite, ed.passingYear, ed.diplome];
          })
        ]
      }
    };
  }

  getProfilePicObject() {
    if (this.resume.profilePic) {
      return {
        image: this.resume.profilePic ,
        width: 75,
        alignment : 'right'
      };
    }
    return null;
  }

  fileChanged(e) {
    const file = e.target.files[0];
    this.getBase64(file);
  }

  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.resume.profilePic = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  } 

  skills(){
 
    this.userService.addSkills(this.resume.skills).subscribe(res=>{
      let from="top"
      let align="right"
      this.toastService.success('Skills added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
      
    })
    
  }

  educations(){
    console.log(this.resume.educations);
    
    this.userService.addEducation(this.resume.educations).subscribe(res=>{
      let from="top"
      let align="right"
      this.toastService.success('Education added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
      
    })
  }
  experiences(){
    console.log(this.resume.experiences);
    
    this.userService.addExperience(this.resume.experiences).subscribe(res=>{
      let from="top"
      let align="right"
      this.toastService.success('Experience added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
    })
  }

  aboutme(){
    console.log(this.resume.otherDetails);
    
    this.userService.aboutme(this.resume.otherDetails).subscribe(res=>{
      let from="top"
      let align="right"
      this.toastService.success('About me added with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align})
      
    })

  }

  deleteEducation(id:any){
    this.userService.deleteEducation(id).subscribe(res=>{
      this.getUser()
      let from="top"
        let align="right"
        this.toastService.success('Education deleted with succes !' , '',{timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-info alert-with-icon" ,
        positionClass: 'toast-' + from + '-' +  align
      })
        
     
     })
    
  }
  deleteSkill(id:any){
    this.userService.deleteSkills(id).subscribe(res=>{
      console.log(res);
      
      this.getUser()
      let from="top"
        let align="right"
        this.toastService.success('Skills deleted with succes !' , '',{timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-info alert-with-icon" ,
        positionClass: 'toast-' + from + '-' +  align
      })
        
     
     })
    
  }
  deleteExperience(id:any){
   this.userService.deleteExperience(id).subscribe(res=>{
    this.getUser()
    let from="top"
      let align="right"
      this.toastService.success('Experience deleted with succes !' , '',{timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon" ,
      positionClass: 'toast-' + from + '-' +  align
    })
      
   
   })
    

  }
   
} 