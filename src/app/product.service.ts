import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from 'src/models/product';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  url="https://localhost:44323/api/product"
  constructor(private http:HttpClient) { }
  getProducts():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getProductById(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
}
