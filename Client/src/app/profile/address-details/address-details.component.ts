import { Component, OnInit } from '@angular/core';
//import { EditAddressComponent } from '../edit-address.component';
@Component({
 selector: 'app-address-details',
 templateUrl: './address-details.component.html',
 styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

 constructor() { }

selectedAddress;
ngOnInit() {
 
 }

hideEdit=true;
hideList=false;


hideBackButton=true;
hideAddButton=false;

editIt()
{
// console.log("This is displayed in parent : "+this.selectedAddress);

 this.hideEdit=false;
 this.hideList=true;
 
 
 this.hideBackButton=false;
 this.hideAddButton=true;
}

back()
{
 this.hideEdit=true;
 this.hideList=false;

 
 this.hideBackButton=true;
 this.hideAddButton=false;
}


addIt()
{
 this.selectedAddress="addNewAddress" 
 this.hideEdit=false;
 this.hideList=true;

 
 this.hideBackButton=false;
 this.hideAddButton=true;
}


}