import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class RemoteService {
    private url="http://localhost:8080/api/remote";
    constructor(private http:HttpClient){}

    getListRemote(){
      return this.http.get<any>(this.url+"/all")
  }

 
  filterByDate(start:any,end:any){
    return this.http.get<any>(this.url+'/filtreByDate/'+start+'/'+end)

  }

  confirmed(id:number){
    return this.http.get<any>(this.url+'/confirmed/'+id)
  }

}