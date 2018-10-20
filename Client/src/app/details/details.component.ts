import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service.ts';
import { CartService } from '../cart/cart.service.ts';
import 
@Component({
 selector: 'app-details',
 templateUrl: './details.component.html',
 styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges {
prod_id;
productDetail;
errorMessage="Sorry There is some error";
errorMessage1=" 1 Sorry There is some error";
errorMessage2="2 Sorry There is some error";

successMessage="Succeded"; 
successMessage1="2 Succeded";
successMessage2="2 Succeded";

newCartItem:object;
isPresentInCart;
isPresentInWishlist;
isInOrders;
presentQuant=0;
reviewVisible=false;
rateVisible=true;
constructor(private route:ActivatedRoute, private obj:HomeService, private cartAdder: CartService) { 
 
}
 
 getDetails() {
 this.obj.getProducts({"prod_id":this.prod_id}).subscribe(
 suppliedData => { this.productDetail = suppliedData },
 error => this.errorMessage = error); 
 }

addToCart(quant)
{
 quant = parseInt(quant);
 this.newCartItem={"user_id":localStorage.getItem('loggedIn'), "prod_id":this.productDetail[0].prod_id, "img_url":this.productDetail[0].img_url, "name":this.productDetail[0].name, "category":this.productDetail[0].category, "price":this.productDetail[0].price,"discount":this.productDetail[0].discount "quantity":quant};
 // console.log("Following is the name for new Cart item : "this.newCartItem.name);

 if(this.isPresentInCart == "false")
 {
 
 // console.log ("Product Is not present in the cart so adding"); 
 this.cartAdder.addDetail(this.newCartItem).subscribe(
 suppliedData => { this.successMessage1 = suppliedData 
 this.checkProductInCart()
 },
 { error => this.errorMessage1 = error });
 // console.log("Sent Data To Database");
 //location.reload();

 
 }
 else
 {
 // //console.log("Product already in cart updating value boolean is : "+this.isPresentInCart)
 //Updating The Quantity In The DataBase
 this.cartAdder.updateQuantity(this.newCartItem).subscribe(
 suppliedData => { this.successMessage2 = suppliedData 
 this.presentQuant=((suppliedData).value.quantity);
 },
 { error => this.errorMessage2 = error });
 document.getElementById("info").innerText="Quantity Increased Successfully"
 
 }
 
}




checkProductInCart(){

this.cartAdder.isProductInCart({"user_id":localStorage.getItem('loggedIn'),"prod_id":this.prod_id}).subscribe(
 suppliedData => { 
 this.successMessage1 = suppliedData 
 //console.log("Checked Product In Cart recieved value is :" + typeof suppliedData[0])
 if (typeof suppliedData[0] == "undefined")
 {this.isPresentInCart="false";
 // //console.log("Setting Product as absent");
 }
 else
 {
 this.isPresentInCart="true";
 document.getElementById("info").innerText="This Product Is already There In Your Cart Click To Increase Quantity"
 this.presentQuant=((suppliedData)[0].quantity);
 }
 },
 { 
 error => this.errorMessage1 = error 
 //console.log("Product is Not present in users cart Recived value is "+ error);
 });

}





addToWishlist()
 {
 if(localStorage.getItem('loggedIn') != "Guest")
 {

 var newWishItem={"user_id":localStorage.getItem('loggedIn'), "prod_id":this.productDetail[0].prod_id, "img_url":this.productDetail[0].img_url, "name":this.productDetail[0].name, "category":this.productDetail[0].category, "price":this.productDetail[0].price,"discount":this.productDetail[0].discount};
 // console.log("Following is the name for new Wishlist Item : "this.newCartItem.name);
 this.checkProductInWishlist()
 if(this.isPresentInWishlist == "false")
 {
 
 // console.log ("Product Is not present in the Wishlist so adding"); 
 this.cartAdder.addWish(newWishItem).subscribe(
 suppliedData => { this.successMessage1 = suppliedData
 this.checkProductInWishlist()},
 { error => this.errorMessage1 = error });
 // console.log("Sent Data To Database");
 }

 }
 else
 {document.getElementById("info").innerText="Sorry !! Please Sign In To use this feature"}
 }


checkProductInWishlist(){
this.cartAdder.isProductInWishlist({"user_id":localStorage.getItem('loggedIn'),"prod_id":this.prod_id}).subscribe(
 suppliedData => { 
 this.successMessage1 = suppliedData 
 // console.log("Checked Product In Wishlist recieved value is :" + typeof suppliedData[0])
 if (typeof suppliedData[0] == "undefined")
 {this.isPresentInWishlist="false";
 // console.log("Setting Product as absent in Wishlist");
 
 }
 else
 {
 this.isPresentInWishlist="true";
 document.getElementById("info").innerText="Product has been added to Your Wishlist"
 // console.log("Product Set To be prsent IN wishlist");
 }
 },
 { 
 error => this.errorMessage1 = error 
 //console.log("Product is Not present in users cart Recived value is "+ error);
 });
}




hasBought(){
this.cartAdder.hasBought({"user_id":localStorage.getItem('loggedIn'),"prod_id":this.prod_id}).subscribe(
 suppliedData => { 
 this.successMessage1 = suppliedData 
 // console.log("Checked Product In Orders recieved value is :" + typeof suppliedData[0])
 if (typeof suppliedData[0] == "undefined")
 {this.isInOrders=false;
 // console.log("Setting Product as absent in Orders");
 
 }
 else
 {
 this.isInOrders=true;
 //document.getElementById("info2").innerText="You have bought this product"
 // console.log("Product Set To be prsent IN orders");
 }
 },
 { 
 error => this.errorMessage1 = error 
 //console.log("Product is Not present in users cart Recived value is "+ error);
 });
}




showReview()
{
this.reviewVisible=true;
}

showRate()
{
this.rateVisible=false;
}

// 
addReview(comment)
 {
 if(localStorage.getItem('loggedIn') != "Guest")
 {
 // console.log("yser ame tpo sed is "+localStorage.getItem('currentUserName'))
 var newReview={"user_name":localStorage.getItem('currentUserName'), "prod_id":this.productDetail[0].prod_id, "comment":comment};
 // console.log("Following is the name for new Wishlist Item : "this.newCartItem.name);
 
 
 // console.log ("Going to add review"); 
 this.cartAdder.addReview(newReview).subscribe(
 suppliedData => { this.successMessage1 = suppliedData
 this.reviewVisible=false;
 document.getElementById("info2").innerText="Thankyou For your valuable Feedback.It will be reflected Here when you come back"
 },
 { error => this.errorMessage1 = error });
 // console.log("Sent Data To Database");
 
 }
 else
 {document.getElementById("info").innerText="Sorry !! Please Sign In To use this feature"}
 }


// 




ngOnInit() {
this.prod_id= this.route.snapshot.params['prod_id']
this.getDetails()
this.checkProductInWishlist()
this.checkProductInCart()
this.hasBought()
 
}

 
}