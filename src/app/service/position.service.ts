import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class PositionService {
    private url="http://localhost:8080/api/position";
    constructor(private http:HttpClient){}


    getAll(){
        return this.http.get<any>(this.url+"/all")
    }
    addPosition(resource:any){
      return this.http.post<any>(this.url+"/addPosition",resource)
  }

    delete(id:any){
      return this.http.delete<any>(this.url+'/'+id)
    }

    

}