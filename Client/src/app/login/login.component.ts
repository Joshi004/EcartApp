import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import {ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { DetaislComponent } from '../details/details.component';
import { CartService } from '../cart/cart.service';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public default_id= "";

constructor(private connector: LoginService,private route:ActivatedRoute,private fb: FormBuilder, private router:Router, private cartAdder:CartService) { }
loginForm = this.fb.group({
 user_id: ["", Validators.required],
 password: ["", Validators.required]
 current_user[localStorage.getItem('loggedIn')]
 })

public default_mail;
public prevUser: string;
public current_user: string;
cartItems; 
 public current_user = localStorage.getItem('loggedIn');

 
 errorMessage2: string;
successMessage2;

 errorMessage1: string;
successMessage1;


errorMessage: string;
successMessage;
userDetail;
isPresentInCart;

tempData;
 login() {
 this.getProductInCart()
 
 // console.log("Trying To Log In");
 localStorage.prevUser=localStorage.loggedIn;
 this.connector.checkPresense(this.loginForm.value).subscribe(
 recieved => { this.userDetail = recieved
 if(this.userDetail !=null)
 {
 localStorage.loggedIn = this.userDetail.user_id;
 localStorage.currentUserName=this.userDetail.user_name;
 
 // console.log("Now user Name should Be"+localStorage.getItem('currentUserName'));
 // console.log("Fetched User is : "+this.userDetail.user_id+" Previsous user is : "+localStorage.prevUser);
 
 }
 
 if(localStorage.prevUser==localStorage.loggedIn) 
 {
 document.getElementById("info").innerText="User Name Or Password Incorrect !!!"
 document.getElementById("dhaa").classList.add("btn-danger");
 document.getElementById("info").classList.add("text-danger");
 }
 else
 {
 if(localStorage.getItem('prevUser') == "Guest")
 { for(let i=0;i<this.tempData.length;i++)
 {
 //this.tempData[i].user_id=localStorage.getItem('loggedIn');
 //var myItem=JSON.stringify(this.tempData[i])
 this.checkProductInCart(this.tempData[i]);
 // console.log("Initiating main add to cart method");
 
 this.removeItem(this.tempData[i]);
 }
 }
 this.router.navigateByUrl('/');
 location.reload();
 }
 
 
 },
 error => { this.errorMessage = error 
 //console.log("Here is error "+error);
 },
 );
 // localStorage.current_user=JSON.parse(JSON.stringify(this.loggedIn));
 
 
 }
 ;
 
 //localStorage.setItem("current_user","Smith");
 //checkUser=localStorage.getItem("current_user");

 // *************************************************************
 // *************************************************************

getProductInCart(){

 // console.log("User Before fetching cart item is "+localStorage.getItem('loggedIn'));
 this.cartAdder.isProductInCart({user_id:"Guest"}).subscribe(
 suppliedData => { this.tempData = (suppliedData)
 //console.log("This is Temp data : "temp[0].name);
 
 // console.log("Data After Fetching in supplied data is : "+suppliedData[0].name);
 // console.log("Data After Fetching is : "+JSON.stringify(localStorage.getItem('tempCart'))) 
 },
 { error => this.errorMessage = error }
 );
//console.log("post fetching is "+this.tempData[0].name);

}



addToCart(item)
{
 //console.log("In The adding Metjod Now ");
 
 item.user_id=localStorage.getItem('loggedIn');
 //console.log("*************************************"item.name)
 //this.newCartItem={"user_id":localStorage.getItem('loggedIn'), "prod_id":this.productDetail[0].prod_id, "img_url":this.productDetail[0].img_url, "name":this.productDetail[0].name, "category":this.productDetail[0].category, "price":this.productDetail[0].price,"discount":this.productDetail[0].discount "quantity":quant};
 //console.log("Following is the name for new Cart item : "this.newCartItem.name);

 //console.log("Just Above adding console");
 if(this.isPresentInCart == "false")
 { 
 //console.log ("Product Is not present in the cart so adding"); 
 this.cartAdder.addDetail(item).subscribe(
 suppliedData => { this.successMessage1 = suppliedData 
 //this.checkProductInCart()
 },
 { error => this.errorMessage1 = error });
 //console.log("Sent Data To Database");
 //location.reload();
 }
 else if(this.isPresentInCart == "true")
 {
 // console.log("Product already in cart updating value boolean is : "+this.isPresentInCart)
 //Updating The Quantity In The DataBase
 this.cartAdder.updateQuantity(item).subscribe(
 suppliedData => { this.successMessage2 = suppliedData 
 //this.presentQuant=((suppliedData).value.quantity);
 },
 { error => this.errorMessage2 = error });
 //document.getElementById("info").innerText="Quantity Increased Successfully"
 
 }
 
}
 


 
checkProductInCart(item){
// console.log("Checking Presense For "+localStorage.getItem('loggedIn'));
this.cartAdder.isProductInCart({"user_id":localStorage.getItem('loggedIn'),"prod_id":item.prod_id}).subscribe(
 suppliedData => { 
 this.successMessage1 = suppliedData 
 // console.log("Checked Product In Cart recieved value is :" + typeof suppliedData[0])
 if (typeof suppliedData[0] == "undefined")
 {this.isPresentInCart="false";
 // console.log("Setting Product as absent");
 }
 else
 {
 this.isPresentInCart="true";
 // console.log("Setting Product as present");
 }
 this.addToCart(item);
 },
 { 
 error => this.errorMessage1 = error 
 //console.log("Product is Not present in users cart Recived value is "+ error);
 });

}



removeItem(item)
{
 //item.user_id="guest"
 this.cartAdder.removeItem(item).subscribe(
 suppliedData => { this.successMessage2 = suppliedData},
 { error => this.errorMessage2 = error });
 }
 


 // *************************************************************
 // *************************************************************

 
 ngOnInit() {
 this.default_mail=this.route.snapshot.paramMap.get('user_id'); 
 
// If user in on login page by ny means He must be logged Out
 
}


 

}
