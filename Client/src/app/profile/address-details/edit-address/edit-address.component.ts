import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../../signup/signup.service';
import { LoginService } from '../../../login/login.service';
import { ProfileService } from '../../profile.service';

@Component({
 selector: 'app-edit-address',
 templateUrl: './edit-address.component.html',
 styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

constructor (private formBuilder: FormBuilder,private login:LoginService, private signup:SignupService, private prof:ProfileService) { }
 register: FormGroup;
 public d_name, d_pin, d_locality, d_street, city, state, landmark, alterPhone; 
 public successReply;
 public errorMessage;
 public successMessage;
 @Input('parentData') public selectedAddress;
 ngOnInit() {
 console.log("Value of variable selectedAddres before comparision is :"this.selectedAddress)
 
 this.fetchData();
 
 
 this.registerForm = this.formBuilder.group
 ({
 name: [this.d_name, [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
 pin: [this.d_pin, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}$/)]],
 locality: [this.d_locality, Validators.required],
 street: [this.d_street, Validators.required],
 city: [this.d_city, Validators.required],
 state: [this.d_state, Validators.required],
 landmark: [this.d_landmark, Validators.required],
 alterPhone: [this.d_alterPhone, Validators.required], 
 });

 } 



fetchData()
 {
 
 // console.log("Entering In fetch Address Data");
 // console.log("Selected Adress before fetching starting is : "+this.selectedAddress);
 var add= this.selectedAddress;
 // console.log("Selected Adress before fetching starting is : "+add)
 this.prof.getAddressList({"address_id":add}).subscribe(
 addressDetail => {
 //console.log("recieved Address is "+addressDetail[0].address_id); 
 var i=0;
 
 if(addressDetail[0])
 { 
 this.d_name = addressDetail[0].name; 
 this.d_pin = addressDetail[0].pin; 
 this.d_locality = addressDetail[0].locality; 
 this.d_street = addressDetail[0].street; 
 this.d_city = addressDetail[0].city; 
 this.d_state = addressDetail[0].state; 
 this.d_landmark = addressDetail[0].landmark; 
 this.d_alterPhone = addressDetail[0].alterPhone; 
 } 
 // console.log("Address Data Fetched Finally ");
 
 // Setting Values Again after data is fetched 
 this.setValues();
 },
 error => { this.successMessage = error }
 );
 
// console.log("Exiting fetch Data");
 }


setValues()
{

 // console.log("Going To set Address Values");
 this.registerForm = this.formBuilder.group
 ({
 name: [this.d_name, Validators.required],
 pin: [this.d_pin, Validators.required],
 locality: [this.d_locality, Validators.required],
 street: [this.d_street, Validators.required],
 city: [this.d_city, Validators.required],
 state: [this.d_state, Validators.required],
 landmark: [this.d_landmark, Validators.required],
 alterPhone: [this.d_alterPhone, Validators.required], 
 });

}




register()
{
var address_id = new Date();
var addressDetail=this.registerForm.value;
// console.log("This is New street to be set : "+addressDetail.street);

addressDetail.address_id=address_id;
addressDetail.user_id=localStorage.getItem('loggedIn');

// console.log("Going To set these values may add or modify");
// console.log(addressDetail)
var dataBase="addresses"
// console.log("Now check the value of selectAddress "+this.selectedAddress);
if(this.selectedAddress=="addNewAddress")
{
 // console.log("Adding fresh address");
 this.prof.addAddress(addressDetail,dataBase).subscribe(
 addressDetail => { this.successReply = addressDetail 
 // console.log("Added Address is "+ this.successReply);
 document.getElementById("infoAddress").innerText="Address Added Sucessfuly"; 
 },
 error => { this.errorMessage = error }
 );
}
 else
 {
 // Start Exp
 // console.log("Modifying Details");
 var arr=[addressDetail,this.selectedAddress]
 // console.log(addressDetail); 
 this.prof.updateAddress(arr).subscribe(
 userDetail => { this.successMessage = userDetail 
 document.getElementById("infoAddress").innerText="Address Details Updated Successfully"; 
 
 },
 error => { this.successMessage = error }
 );

 //sgdgdfgdfg
 
 }
// console.log("Crossed if else loop");
 }

}