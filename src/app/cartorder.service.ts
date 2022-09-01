import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { CartOrder } from 'src/models/cartorder';
import { CatWiseProd } from 'src/models/catwiseprod';
@Injectable({
  providedIn: 'root'
})
export class CartorderService {
  items: CatWiseProd[] = [];
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  url="https://localhost:44323/api/cartorder";
  constructor(private http:HttpClient) { }
  getCartItem():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  addCartItem(newcartitem:CartOrder): Observable<any>
  {
    alert(newcartitem)
    return this.http.post<any>(this.url,newcartitem);
  }
 getItem(){
  
 }
}
