import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education, Experience, Skill } from 'app/interface/interface';
 
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
    private url="http://localhost:8081/api/user";
    constructor(private http:HttpClient){}


    getListUser(){
        return this.http.get<any>(this.url+"/all")
    }

    addEducation(resource:Education[]){
      let id=localStorage.getItem('id')
       
      return this.http.post<any>(this.url+"/addEducation/"+id,resource)
    }
    addSkills(resource:Skill[]){
      let id=localStorage.getItem('id')
       
      return this.http.post<any>(this.url+"/addSkills/"+id,resource)
    }
    addExperience(resource:Experience[]){
      let id=localStorage.getItem('id')
       
      return this.http.post<any>(this.url+"/addExperience/"+id,resource)
    }
    addChild(resource:any){
      let id=localStorage.getItem('id')
      return this.http.post<any>(this.url+"/childRequest/"+id,resource)
    }
    addInternet(resource:any){
      let id=localStorage.getItem('id')
      return this.http.post<any>(this.url+"/internetRequest/"+id,resource)
    }
    addGym(resource:any){
      let id=localStorage.getItem('id')
      return this.http.post<any>(this.url+"/gymRequest/"+id,resource)
    }
    delete(id:any){
      return this.http.delete<any>(this.url+'/'+id)
    }
    getUser(){
      let id=localStorage.getItem('id')
      return this.http.get<any>(this.url+'/user/'+id)
    }
    singleUser(id:any){
      return this.http.get<any>(this.url+'/user/'+id)
    }

    updateUser(resource:any){
      let id=localStorage.getItem('id')
      return this.http.put<any>(this.url+'/user/'+id,resource)
    }
    addHoliday(resource:any){
      let id=localStorage.getItem('id')
      return this.http.post<any>(this.url+"/addHoliday/"+id,resource)
    }

    addRemote(resource:any){
      let id=localStorage.getItem('id')
      return this.http.post<any>(this.url+"/addRemote/"+id,resource)
    }

    addPresence(resource:any){
      let id=localStorage.getItem('id')
      return this.http.post<any>(this.url+"/addPresence/"+id,resource)
    }

    addPermission(resource:any){
      let id=localStorage.getItem('id')
      return this.http.post<any>(this.url+"/addPermission/"+id,resource)
    }

    update(resource:any){
      let id=localStorage.getItem('id')
      return this.http.put<any>(this.url+"/user/"+id,resource)
    }

    aboutme(resource:String){
      let id=localStorage.getItem('id')
      return this.http.put<any>(this.url+"/aboutme/"+id,resource)
  
    }

    addTask(resource){
      let id=localStorage.getItem('id')
      return this.http.put<any>(this.url+"/addTask/"+id,resource)
    }

    addRequest(resource){
      let id=localStorage.getItem('id')
      return this.http.put<any>(this.url+"/addRequest/"+id,resource)
    }
    search(key:any){
      return this.http.get<any>(this.url+'/search/'+key )
    }

    uploadAvatar(resource:any){
      
      return this.http.post<any>(this.url+"/uploadAvatar",resource)
  
    }
    getProfilImage(filename:string){
      return this.http.get(this.url+'/downloadFile/'+filename)
    }

    deleteSkills(id:any){
      return this.http.delete<any>(this.url+'/deleteSkills/'+id)
    }

    deleteEducation(id:any){
      return this.http.delete<any>(this.url+'/deleteEducation/'+id)
    }

    deleteExperience(id:any){
      return this.http.delete<any>(this.url+'/deleteExperience/'+id)
    }
    
    forgetPassword(email:any){
      return this.http.get<any>(this.url+'/forgetPassword/'+email)
    }
    resetPassword(token:any,password:any){
      return this.http.get<any>(this.url+'/resetPassword/'+token+'/'+password)
    }
}