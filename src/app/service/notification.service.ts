import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
 
 
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    nbNotif$ = new BehaviorSubject<number>(0) // hightlight-line

    private url="http://localhost:8081/api/notification";
    constructor(private http:HttpClient){
        this.nbNotif$.next(0)

    }

    getNotification(){
    return this.http.get<any>(this.url+"/getNotification/"+localStorage.getItem('id'));
 }
 getListNotification(){
    return this.http.get<any>(this.url+"/getListNotification/"+localStorage.getItem('id'));
 }

 updateNotifications(nb:number) {
    this.nbNotif$.next(nb)

}
putVU(id:number){
    return this.http.put<any>(this.url+"/putVU/"+id,{});
  
}
}