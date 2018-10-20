import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { CardDetailsComponent } from '../card-details.component';
import { ProfileComponent } from '../../profile.component'
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../../cart/cart.service';
@Component({
 selector: 'app-list-card',
 templateUrl: './list-card.component.html',
 styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

 constructor(private prof:ProfileService, private cartObj:CartService, private proc:ProfileComponent, private parent:CardDetailsComponent,private router:Router, private route:ActivatedRoute) { }

 
 ngOnInit() {
 this.getCardList();

 this.param=this.route.snapshot.paramMap; 
 // console.log("This is in Card List Now Final Init For Now printing param"+this.param.get('status'));
 if(localStorage.getItem('comp') == this.param.get('comp'))
 {this.orderingNow=1}
}
orderingNow=0;
 param; 
 successMessage;
 cardList;
 errorMesage;
 @Output() public sender = new EventEmitter();
 
 getCardList() {
 // console.log(localStorage.getItem('^toSearch'));
 
 this.prof.getCardList({"user_id":localStorage.getItem('loggedIn')}).subscribe(
 suppliedData => {this.cardList = suppliedData
 // console.log("Retrived cards are : "+this.cardList[0].name +" and "+this.cardList[1].name);
 },
 error => this.errorMessage = error); 
 }


 send(id){
 // console.log(id);
 this.parent.editIt();
 this.sender.emit(id);
 }


forwardToOrders(id,typ)
{
 var orderDetails={}
orderDetails.card_no=id;
orderDetails.card_type=typ;

orderDetails.status=this.param.get('status');
orderDetails.date=this.param.get('date');
orderDetails.comp=this.param.get('comp');
orderDetails.order_id=this.param.get('order_id');
orderDetails.action=this.param.get('action');
orderDetails.product_list=this.param.get('product_list');
orderDetails.product_ids=this.param.get('product_ids');
orderDetails.total_bill=this.param.get('total_bill');
orderDetails.address_id=this.param.get('address_id');
orderDetails.user_id=localStorage.getItem('loggedIn');


//this.orderDetailsToDatabase(this.orderDetails);

this.prof.addOrder(orderDetails).subscribe(
 orderDetail => { this.successMessage = orderDetail 
 // console.log("Noew calling remove item from cart Added order is "+ this.successReply);
 this.emptyCart(localStorage.getItem('loggedIn'));
 //document.getElementById("infoCard").innerText="Order Added Sucessfuly"; 
 },
 error => { this.errorMessage = error }
 );


//

// console.log("Goin To send Following Data to DataBase");

// //Adding To Notofications
// console.log("Adding To Notifications"+orderDetails);

orderDetails.message="Order Placed SuccessFully";
orderDetails.noteDate=new Date();

this.prof.addNotification(orderDetails).subscribe(
 orderDetail => { this.successMessage = orderDetail 
 // console.log("Added To Notifications");
 //document.getElementById("infoCard").innerText="Order Added Sucessfuly"; 
 },
 error => { this.errorMessage = error }
 );



this.router.navigateByUrl('/orders',this.orderDetails);
}

emptyCart(usr)
{
 
 
 var detail={"user_id":usr}
 
 this.cartObj.emptyCart(detail).subscribe(
 suppliedData => { this.successMessage = suppliedData},
 { error => this.errorMessage2 = error });
 }
 



 
removeCard(id)
 {
 
 // console.log("recived Card Id is : "+(id);
 
 var detail={"card_id":id}
 this.prof.removeCard(detail).subscribe(
 suppliedData => { this.successMessage = suppliedData
 // console.log("Query Sent To database");
 this.getCardList({"user_id":localStorage.getItem('loggedIn')});
 },
 error => this.errorMessage = error );
 }



 }

