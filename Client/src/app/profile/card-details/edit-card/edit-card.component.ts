import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../../signup/signup.service';
import { LoginService } from '../../../login/login.service';
import { ProfileService } from '../../profile.service';

@Component({
 selector: 'app-edit-card',
 templateUrl: './edit-card.component.html',
 styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

constructor (private formBuilder: FormBuilder,private login:LoginService, private signup:SignupService, private prof:ProfileService) { }
 register: FormGroup;
 public d_name, d_card_no, d_expiry, d_card_type; 
 public successReply;
 public errorMessage;
 public successMessage;
 @Input('parentData') public selectedCard;
 ngOnInit() {
 // console.log("Value of variable selectedAddres before comparision is :"this.selectedCard)
 
 this.fetchData();
 
 
 this.registerForm = this.formBuilder.group
 ({
 name: [this.d_name, Validators.required],
 card_no: [this.d_card_no, Validators.required],
 expiry: [this.d_expiry, Validators.required],
 
 
 });

 } 



fetchData()
 {
 
 // console.log("Entering In fetch Card Data");
 // console.log("Selected Adress before fetching starting is : "+this.selectedCard);
 var add= this.selectedCard;
 // console.log("Selected Adress before fetching starting is : "+add)
 this.prof.getCardList({"card_id":add}).subscribe(
 cardDetail => {
 //console.log("recieved Card is "+cardDetail[0].card_id); 
 var i=0;
 
 if(cardDetail[0])
 { 
 name: [this.d_name, Validators.required],
 card_no: [this.d_card_no, Validators.required],
 expiry: [this.d_expiry, Validators.required]
 
 } 
 // console.log("Card Data Fetched Finally ");
 
 // Setting Values Again after data is fetched 
 this.setValues();
 },
 error => { this.successMessage = error }
 );
 
// console.log("Exiting fetch Data");
 
}


setValues()
{

 // console.log("Going To set Card Values");
 this.registerForm = this.formBuilder.group
 ({
 name: [this.d_name, Validators.required],
 card_no: [this.d_card_no, Validators.required],
 expiry: [this.d_expiry, Validators.required]
 
 });

}




register()
{
var card_id = new Date();
var cardDetail=this.registerForm.value;
// console.log("This is New street to be set : "+cardDetail.street);

cardDetail.card_id=card_id;
cardDetail.user_id=localStorage.getItem('loggedIn');
cardDetail.card_type=document.getElementById("card_type").value;

// console.log("Going To set these values may add or modify");
// console.log(cardDetail)
var dataBase="cards"
// console.log("Now check the value of selectCard "+this.selectedCard);
if(this.selectedCard=="addNewCard")
{
 // console.log("Adding fresh Card");
 this.prof.addCard(cardDetail,dataBase).subscribe(
 cardDetail => { this.successReply = cardDetail 
 // console.log("Added Card is "+ this.successReply);
 document.getElementById("infoCard").innerText="Card Added Sucessfuly"; 
 },
 error => { this.errorMessage = error }
 );
}
 else
 {
 // Start Exp
 // console.log("Modifying Details");
 var arr=[cardDetail,this.selectedCard]
 // console.log(cardDetail); 
 this.prof.updateCard(arr).subscribe(
 userDetail => { this.successMessage = userDetail 
 document.getElementById("infoCard").innerText="Card Details Updated Successfully"; 
 
 },
 error => { this.successMessage = error }
 );

 //sgdgdfgdfg
 
 }
// console.log("Crossed if else loop");
 }

}