import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

addDetail(details): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/addToCart',details 
    );
  }

addWish(details): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/addToWishlist',details 
    );
  }



  addReview(details): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/addReview',details 
    );
  }




isProductInCart(combo): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/isProductInCart',combo 
    );
  }



isProductInWishlist(combo): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/isProductInWishlist',combo 
    );
  }



hasBought(combo): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/hasBought',combo 
    );
  }


    updateQuantity(detail): Observable<any> {
    return this.http.put<any>(
      'http://localhost:3000/updateQuantity',detail 
    );
  }

  removeItem(detail): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/removeItem',detail 
    );
  }


  emptyCart(detail): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/emptyCart',detail 
    );
  }



}


