import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { AddressDetailsComponent } from '../address-details.component';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
 selector: 'app-list-address',
 templateUrl: './list-address.component.html',
 styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

 constructor(private prof:ProfileService, private parent:AddressDetailsComponent, private router:Router, private route:ActivatedRoute) { }

 
 ngOnInit() {
 this.getAddressList();

this.param=this.route.snapshot.paramMap; 
 // console.log("This is in Card List Now Final Init For Now printing param"+this.param.get('status'));
 if(localStorage.getItem('comp') == this.param.get('comp'))
 {this.orderingNow=1
 document.getElementById("heading").innerText="Please Select An Addres"
 }
}
 successMessage;
 orderDetails;
 addressList;
 orderingNow;
 errorMesage;
 @Output() public sender = new EventEmitter();
 
 getAddressList() {
 // console.log(localStorage.getItem('^toSearch'));
 
 this.prof.getAddressList({"user_id":localStorage.getItem('loggedIn')}).subscribe(
 suppliedData => {this.addressList = suppliedData
 //console.log("Retrived addresses are : "+this.addressList[0].name +" and "+this.addressList[1].name);
 },
 error => this.errorMessage = error); 
 }


 send(id){
 // console.log(id);
 this.parent.editIt();
 this.sender.emit(id);
 }

 

forwardToOrders(id)
{
 var orderDetails={}
orderDetails.address_id=id;

orderDetails.status=this.param.get('status');
orderDetails.date=this.param.get('date');
orderDetails.comp=this.param.get('comp');
orderDetails.order_id=this.param.get('order_id');
orderDetails.action=3;
orderDetails.product_list=this.param.get('product_list');
orderDetails.product_ids=this.param.get('product_ids');
orderDetails.total_bill=this.param.get('total_bill');
orderDetails.user_id=localStorage.getItem('loggedIn');


//this.orderDetailsToDatabase(this.orderDetails);
// //
// this.prof.addOrder(orderDetails).subscribe(
// orderDetail => { this.successMessage = orderDetail 
// console.log("Noew calling remove item from cart Added order is "+ this.successReply);
// this.emptyCart(localStorage.getItem('loggedIn'));
// //document.getElementById("infoCard").innerText="Order Added Sucessfuly"; 
// },
// error => { this.errorMessage = error }
// );


//

// console.log("Goin To send Following Data to DataBase");
// console.log(orderDetails);
// console.log('Redirecting To profile again');
document.getElementById("heading").innerText="Choose Payment Option Also To Place Order"
document.getElementById("heading").classList.add("alert");
document.getElementById("heading").classList.add("alert-danger");
//this.router.navigateByUrl('/profile',orderDetails);
}






removeAddress(id)
 {
 
 // console.log("recived Address Id is : "+(id);
 
 var detail={"address_id":id}
 this.prof.removeAddress(detail).subscribe(
 suppliedData => { this.successMessage = suppliedData
 // console.log("Query Sent To database");
 this.getAddressList({"user_id":localStorage.getItem('loggedIn')});
 },
 error => this.errorMessage = error );
 }

}
