import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Retailer } from 'src/models/retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  
  url="https://localhost:44323/api/retailer";
  constructor(private http:HttpClient) { }

  getRetailer():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  CheckLogin(body:any):Observable<any>{
    return this.http.post<any>((this.url+"/rlogin"),body,{observe:'response'});
     }
     getRetailerById(id:number):Observable<any>
     {
       return this.http.get<any>(this.url+'/'+ id);
     }
     Updateretailer( ret: Retailer): Observable<any> {
     
       return this.http.put<any>(this.url+"/"+ ret.rid,ret,this.httpOptions).pipe(catchError(this.handleError));
     
     }
     Addretailer(newretailer:Retailer): Observable<any>
     {
       return this.http.post<any>(this.url,newretailer);
     }
     Deleteretailer(id:number):Observable<any>
     {
       return this.http.delete<any>(this.url + "/" + id);
     }
     
     
     handleError(error:HttpErrorResponse){
     
       let errorMessage="";
     
       errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
     
       alert(errorMessage);
     
       return throwError(errorMessage);
     
     }
}
