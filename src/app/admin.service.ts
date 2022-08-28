import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  
  url="https://localhost:44323/api/admin";
  constructor(private http:HttpClient) { }

  getUsers():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  CheckLogin(body:any):Observable<any>{
    return this.http.post<any>((this.url+"/login"),body,{observe:'response'});
     }

}
