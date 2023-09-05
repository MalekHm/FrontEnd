import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
private url="http://localhost:8080/api/auth";
  constructor(private http:HttpClient) { }

  login(resource:any) :Observable<any> {
    return this.http.post<any>(this.url+'/signin',resource)
    
      //.catch(this.handleError);
  }
  addUser(resource:any)   {
    return this.http.post<any>(this.url+'/newUser',resource)
    
      //.catch(this.handleError);
  }
  
}
