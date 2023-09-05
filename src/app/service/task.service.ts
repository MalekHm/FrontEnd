import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {
    private url="http://localhost:8080/api/task";
    constructor(private http:HttpClient){}

   
  filterByDate(start:any,end:any){
    return this.http.get<any>(this.url+'/filtreByDate/'+start+'/'+end)

  }
}