import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from 'src/models/user';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  url="https://localhost:44323/api/user";
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getUsersById(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  UpdateUser( user:User): Observable<User> {
    return this.http.put<User>(this.url+"/"+ user.id,user,this.httpOptions).pipe(catchError(this.handleError));
  }
  AddUser(newuser:User):Observable<any>
{
  return this.http.post<any>(this.url,newuser)
}
deleteUser(id:number):Observable<any>
  {
    return this.http.delete<any>(this.url+"/"+id);
  }
 CheckLogin(body:any):Observable<any>{
return this.http.post<any>((this.url+"/login"),body,{observe:'response'});
 }
 handleError(error:HttpErrorResponse){
  let errorMessage="";
  errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
  alert(errorMessage);
  return throwError(errorMessage);
}
}