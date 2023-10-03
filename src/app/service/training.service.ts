import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class Trainingervice {
    private url="http://localhost:8081/api/training";
    constructor(private http:HttpClient){}


    getAll(){
        return this.http.get<any>(this.url+"/all")
    }
    addTraining(resource:any){
      return this.http.post<any>(this.url+"/addTraining",resource)
  }

    delete(id:any){
      return this.http.delete<any>(this.url+'/'+id)
    }

    getUser(id:any){
      return this.http.get<any>(this.url+'/'+id)
    }
    requestTrainings(trainingId:any){
      let userId=localStorage.getItem('id')
      return this.http.get<any>(this.url+'/request/'+userId+'/'+trainingId)
    }
}