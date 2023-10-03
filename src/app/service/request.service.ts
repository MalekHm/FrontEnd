import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class RequestService {
    private url="http://localhost:8081/api/request";
    constructor(private http:HttpClient){}


    getRequests(){
        return this.http.get<any>(this.url+"/all")
    }
    filterByDate(start:any,end:any){
      return this.http.get<any>(this.url+'/filtreByDate/'+localStorage.getItem('id')+'/'+start+'/'+end)

    }
    confirmed(id:number,newStatus){
      return this.http.get<any>(this.url+'/confirmed/'+id+'/'+newStatus)
    }
}