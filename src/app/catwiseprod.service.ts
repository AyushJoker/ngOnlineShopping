import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from 'src/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { CatwiseproductComponent } from './catwiseproduct/catwiseproduct.component';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CatwiseprodService {
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  url="https://localhost:44323/api/catprod";
  constructor(private http:HttpClient) { }
  getCatProdById(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+"/prodlist/"+id);
  }
  getSingleProd(id:number,id1:number):Observable<any>{
    return this.http.get<any>(this.url+"/product/"+id+"/"+id1);
  }
  getProdbySearch(item:string):Observable<any>
  {
    return this.http.get<any>(this.url+"/search/"+item);
  }
}
