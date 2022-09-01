import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/models/product';

import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };

  url:string="https://localhost:44323/api/product";

  constructor(private http:HttpClient) { }

getProducts():Observable<any>
{
  return this.http.get<any>(this.url);
}
getProductById(id:number):Observable<any>
{
  return this.http.get<any>(this.url+'/'+ id);
}
UpdateProduct( pro: Product): Observable<any> {

  return this.http.put<any>(this.url+"/updateproduct/"+ pro.pid,pro,this.httpOptions).pipe(catchError(this.handleError));

}
AddProduct(newproduct:Product): Observable<any>
{
  return this.http.post<any>(this.url,newproduct);
}
DeleteProduct(id:number):Observable<any>
{
  return this.http.delete<any>(this.url + "/" + id);
}
AvailableProduct(pro: Product):Observable<any>
{
  return this.http.put<any>(this.url+"/isavailable/"+ pro.pid,pro,this.httpOptions).pipe(catchError(this.handleError));
}
handleError(error:HttpErrorResponse){

  let errorMessage="";

  errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;

  alert(errorMessage);

  return throwError(errorMessage);

}


}