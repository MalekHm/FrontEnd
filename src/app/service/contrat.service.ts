import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class ContratService {
    private url="http://localhost:8081/api/contract";
    constructor(private http:HttpClient){}

 getAll(){
    return this.http.get<any>(this.url+"/all")
 }
 search(key:any){
   return this.http.get<any>(this.url+'/search/'+key )
 }

 addContrat(resource:any){
   return this.http.post<any>(this.url+"/addContrat",resource)
 }

 getContrat(){
   return this.http.get<any>(this.url+"/getContrat/"+localStorage.getItem('id'))
 }
}