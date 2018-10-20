import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class HomeService {

 constructor(private http: HttpClient) { }

 getProducts(cat): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/getAllProducts',cat 
 );
 }



 getSearch(cat): Observable<any> {
 console.log("This is in search class"+cat.name);
 return this.http.post<any>(
 'http://localhost:3000/getSearch',cat 
 );
 }




 getNotifications(cat): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/getNotifications',cat 
 );
 }
 



 // getAllUsers(): Observable<any> {
 // return this.http.get<any>(
 // 'http://localhost:3000/getAllUsers' 
 // );
 // }



}