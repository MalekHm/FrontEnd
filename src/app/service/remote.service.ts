import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class RemoteService {
    private url="http://localhost:8081/api/remote";
    constructor(private http:HttpClient){}

    getListRemote(){
      return this.http.get<any>(this.url+"/all")
  }

 
  filterByDate(start:any,end:any){
    return this.http.get<any>(this.url+'/filtreByDate/'+start+'/'+end)

  }

  confirmed(id:number,newStatus){
    return this.http.get<any>(this.url+'/confirmed/'+id+'/'+newStatus)
  }

}