import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class TrainingRequestService {
    private url="http://localhost:8080/api/trainingRequets";
    constructor(private http:HttpClient){}

   
    allByUser(){
    return this.http.get<any>(this.url+'/allByUser/'+localStorage.getItem("id"))

  }
}