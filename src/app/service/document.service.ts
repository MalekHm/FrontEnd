import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
    private url="http://localhost:8081/api/document";
    constructor(private http:HttpClient){}


    getAll(){
        return this.http.get<any>(this.url+"/getAll")
    }

    delete(id:any){
      return this.http.delete<any>(this.url+'/'+id)
    }

    getUser(id:any){
      return this.http.get<any>(this.url+'/'+id)
    }
    newDocument(resource){
      return this.http.post<any>(this.url+'/upload',resource)
    }
    download(filename:any){
      return this.http.get(this.url+'/downloadFile/'+filename, {
        responseType: 'blob'
      });

    }
}