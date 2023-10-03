import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class CalendarService {
    private url="http://localhost:8081/api/calendar";
    constructor(private http:HttpClient){}

 getAll(){
    return this.http.get<any>(this.url+"/all")
 }
 addEvent(event:any){
   return this.http.post<any>(this.url+"/event",event)
 }

}