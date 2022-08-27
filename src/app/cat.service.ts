import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/category';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  
  url="https://localhost:44323/api/category";
  constructor(private http:HttpClient) { }
  getCategories():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getCategoresById(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
}

