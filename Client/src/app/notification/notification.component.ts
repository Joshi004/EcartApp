import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service'

@Component({
 selector: 'app-notification',
 templateUrl: './notification.component.html',
 styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

 constructor(private prof: ProfileService) { }

 ngOnInit() {
 //this.getNotifications();
 this.getOrders();
 }
notifications;


getOrders(){

 var user=localStorage.getItem('loggedIn');

 // console.log("Going to get orders for "+user );
 // console.log("Going to get orders of type "+status );
this.prof.getOrders({"user_id":user}).subscribe( 
 suppliedData => { this.notifications = suppliedData 
 // console.log("This is the recived data ")
 // console.log(suppliedData[0]);
 },
 { error => this.errorMessage = error } );
//return this.cartItems();
}

}
