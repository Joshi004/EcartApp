import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../signup/signup.service';
import { LoginService } from '../../login/login.service';

@Component({
 selector: 'app-user-details',
 templateUrl: './user-details.component.html',
 styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
constructor (private formBuilder: FormBuilder,private login:LoginService, private signup:SignupService) { }
 register: FormGroup;
 public d_name, d_id, d_phone, d_password; 
 ngOnInit() {
 
 
 
 this.fetchData();
 
 this.registerForm = this.formBuilder.group({
 user_name: [this.d_name, Validators.required],
 user_id: [this.d_id, [Validators.required, Validators.email]],
 phone_no: [this.d_phone],
 password: [this.d_password, Validators.required],
 });

 } 



fetchData()
 {
 
 // console.log("Entering In fetch Data");
 var current=localStorage.getItem('loggedIn');
 this.login.getUserData({"user_id":current}).subscribe(
 userDetail => {
 //console.log("recieved user name is "+userDetail.user_name); 
 this.d_name = userDetail.user_name; 
 this.d_id = userDetail.user_id;
 this.d_phone = userDetail.phone_no;
 this.d_password = userDetail.password;
 // console.log("Data Fetched Finally");
 
 // Setting Values Again after data is fetched 
 this.setValues();
 },
 error => { this.successMessage = error }
 );
 
// console.log("Exiting fetch Data");
 }


setValues()
{

 // console.log("Going To set Values");
 this.registerForm = this.formBuilder.group({
 user_name: [this.d_name, [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
 user_id: [this.d_id, [Validators.required, Validators.pattern( /(.+)@(.+){2,}\.(.+){2,}/)]],
 phone_no: [this.d_phone,Validators.pattern(/^[1-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}$/)],
 password: [this.d_password, [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]],
 });
 

}





 cancel(){
 // console.log("Updation Canceled");
 }




 register()
{
var arr=[this.registerForm.value,localStorage.getItem('loggedIn')]
//console.log(arr[0];)
//console.log(arr[1];
// console.log(this.registerForm.value); 
this.signup.updateUser(arr).subscribe(
 userDetail => { localStorage.loggedIn = userDetail.user_id 
 localStorage.currentUserName = userDetail.user_name
 // console.log("Updateed ID is "+localStorage.getItem('loggedIn'));
 // console.log("Updateed User Name is "+localStorage.getItem('currentUserName'));
 document.getElementById("info").innerText="User Details Updated Successfully"; 
 },
 error => { this.successMessage = error }
 );

}

}