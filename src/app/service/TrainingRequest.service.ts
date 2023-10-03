import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class TrainingRequestService {
    private url="http://localhost:8081/api/trainingRequets";
    constructor(private http:HttpClient){}

   
    allByUser(){
    return this.http.get<any>(this.url+'/allByUser/'+localStorage.getItem("id"))

  }

  getListRequest(id){
    return this.http.get<any>(this.url+'/getListRequest/'+id)
  }

  confirmed(id:number,newStatus){
    return this.http.get<any>(this.url+'/confirmed/'+id)
  }
}