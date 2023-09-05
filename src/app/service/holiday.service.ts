import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class HolidayService {
    private url="http://localhost:8080/api/holiday";
    constructor(private http:HttpClient){}


    getListHoliday(){
        return this.http.get<any>(this.url+"/all")
    }

   
    filterByDate(start:any,end:any){
      return this.http.get<any>(this.url+'/filtreByDate/'+start+'/'+end)

    }

    confirmed(id:number){
      return this.http.get<any>(this.url+'/confirmed/'+id)
    }

}