import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class ContratService {
    private url="http://localhost:8080/api/contract";
    constructor(private http:HttpClient){}

 getAll(){
    return this.http.get<any>(this.url+"/all")
 }

}