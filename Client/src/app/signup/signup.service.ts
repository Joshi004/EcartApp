import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class SignupService {

 constructor(private http: HttpClient) { }

addUser(userDetails): Observable<any> {
 return this.http.post<any>(
 'http://localhost:3000/addUser',userDetails 
 );
 }

updateUser(userDetails): Observable<any> {
 return this.http.put<any>(
 'http://localhost:3000/updateUser',userDetails 
 );
 }


}