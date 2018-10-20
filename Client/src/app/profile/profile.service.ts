import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class ProfileService {

 constructor(private http: HttpClient) { }

addAddress(addressDetails,database): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/addAddress',addressDetails 
 );
 }

addAddress(addressDetails,database): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/addAddress',addressDetails 
 );
 }



getAddressList(cat): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/getAddressList',cat 
 );
 }


updateAddress(addressDetails): Observable<any> {
 return this.http.put<any>(
 'http://localhost:3000/updateAddress',addressDetails 
 );
 }



removeAddress(detail): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/removeAddress',detail 
 );
 }


// For Card Now 


addCard(cardDetails,database): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/addCard',cardDetails 
 );
 }



addOrder(orderDetails): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/addOrder',orderDetails 
 );
 }



getCardList(cat): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/getCardList',cat 
 );
 }



getOrders(cat): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/getOrders',cat 
 );
 }


updateCard(cardDetails): Observable<any> {
 return this.http.put<any>(
 'http://localhost:3000/updateCard',cardDetails 
 );
 }

updateOrder(Details): Observable<any> {
 return this.http.put<any>(
 'http://localhost:3000/updateOrder',Details 
 );
 }


removeCard(detail): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/removeCard',detail 
 );
 }

addNotification(detail): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/addNotification',detail 
 );
 }


}
