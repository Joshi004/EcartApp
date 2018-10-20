import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
 selector: 'app-orders',
 templateUrl: './orders.component.html',
 styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

 constructor(private prof:ProfileService) { }

action;
orders;
select(cur_id,status)
{
 for(let i=1;i<=4;i++)
 {
 var tabx=document.getElementById(i);
 tabx.classList.remove('active');
 }
 var tab = document.getElementById(cur_id);
 tab.classList.add('active');

if(cur_id == "1")
 this.action="Cancel"

if(cur_id == "2")
 this.action="Return"

if(cur_id == "3")
 this.action="."

if(cur_id == "4")
 this.action="."


 this.getOrders(status);
}


getOrders(status){

 if(status == "open")
 this.action="Cancel";

 var user=localStorage.getItem('loggedIn');

 // console.log("Going to get orders for "+user );
 // console.log("Going to get orders of type "+status );
this.prof.getOrders({"user_id":user,"status":status}).subscribe( 
 suppliedData => { this.orders = suppliedData 
 // console.log("This is the recived data ")
 // console.log(suppliedData[0]);
 },
 { error => this.errorMessage = error } );
//return this.cartItems();
}


updateOrder(order_id,status,i)
{
 var msg="";
 
 if (this.action == "Return")
 {
 var status="returned"
 msg="Item Returned SuccessFully"
 } 


 if (this.action == "Delivered")
 {
 msg="Item Delivered SuccessFully"
 } 


 // console.log("Order Id To be searched is : "order_id);
 
 this.orders[i].status=status
// console.log("Status To be set is : "this.orders[i].status);
 { 
 var detail=this.orders[i];
 this.prof.updateOrder(detail).subscribe(
 suppliedData => { this.successMessage = suppliedData },
 { error => this.errorMessage2 = error });
 }
 
 //this.orderDetailsToDatabase(this.orderDetails);

// this.prof.addOrder(orderDetails).subscribe(
// orderDetail => { this.successMessage = orderDetail 
// console.log("Noew calling remove item from cart Added order is "+ this.successReply);
// this.emptyCart(localStorage.getItem('loggedIn'));
// //document.getElementById("infoCard").innerText="Order Added Sucessfuly"; 
// },
// error => { this.errorMessage = error }
// );

 
 }
 


 ngOnInit() {
 this.orders=this.getOrders("open");
 }

}