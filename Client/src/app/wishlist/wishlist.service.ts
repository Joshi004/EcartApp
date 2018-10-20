import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class WishlistService {

 constructor(private http: HttpClient) { }

 getProducts(cat): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/getAllWishlist',cat 
 );
 }






 removeItem(detail): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/removeWish',detail 
 );
 }
}
