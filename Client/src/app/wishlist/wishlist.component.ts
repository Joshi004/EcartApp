import { Component, OnInit } from '@angular/core';
import { WishlistService } from './wishlist.service'
@Component({
 selector: 'app-wishlist',
 templateUrl: './wishlist.component.html',
 styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

 constructor(private obj:WishlistService) { }
list;

getWishlist() {
 // console.log(localStorage.getItem('^toSearch'));
 
 this.obj.getProducts({"user_id":localStorage.getItem('loggedIn')}).subscribe(
 suppliedData => this.list = suppliedData,
 error => this.errorMessage = error); 
 }




removeFromWishlist(id)
{
 // console.log("Remove Initiated");
 var usr=localStorage.getItem('loggedIn');
 var prod=id;
 // console.log("recived parameter is : "+(id)
 // var list=document.getElementById("parentRow"); 
 // list.removeChild(list.childNodes[(i)]); 
 
 
 var detail={"user_id":usr, "prod_id":prod}
 this.obj.removeItem(detail).subscribe(
 suppliedData => { this.successMessage = suppliedData
 //location.reload();
 //Recalculating The Total
 this.getWishlist();
 },
 error => this.errorMessage2 = error );
 }
 


 ngOnInit() {
 this.getWishlist();
 }



}
