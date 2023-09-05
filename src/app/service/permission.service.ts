import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class PermissionService {
    private url="http://localhost:8080/api/permission";
    constructor(private http:HttpClient){}

    getListPermission (){
      return this.http.get<any>(this.url+"/all")
  }

 
  

  confirmed(id:number){
    return this.http.get<any>(this.url+'/confirmed/'+id)
  }
  filterByDate(start:any,end:any){
    return this.http.get<any>(this.url+'/filtreByDate/'+start+'/'+end)

  }
}