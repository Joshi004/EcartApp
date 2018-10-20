import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class LoginService {

 constructor(private http: HttpClient) { }

 checkPresense(userDetails): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/checkPresense',userDetails 
 );
 }

checkUser(userDetails): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/checkUser',userDetails 
 );
 }


 getUserData(userDetails): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/getUserData',userDetails 
 );
 }



}