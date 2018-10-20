import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service'

@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 registerForm: FormGroup;
 constructor(private connector: SignupService,private log:LoginService, private router:Router,private formBuilder: FormBuilder) { }
 query;
 successMessage:String= 'Enter The Details and Click on Register' 
 errorMessage: string;
 register() {
 if (document.getElementById('pass1').value != document.getElementById('pass2').value)
 {
 document.getElementById('response').innerText='Password Not Matched Please Try Again';
 document.getElementById('pass2').value="";
 this.pass="";
 
 }
 else
 {
 this.connector.addUser(this.registerForm.value).subscribe(
 users => { this.successMessage = users },
 error => { this.successMessage = error }
 
 );
 
 this.router.navigate(['/login',this.registerForm.value.user_id]); 
 }
 }


checkUserPresense(val){
 // console.log("Changed Now ");
 var toCheck={"user_id":val}
 var user;
this.log.checkUser(toCheck).subscribe(
 recieved => { user = recieved 
 //console.log(typeof recieved[0].name);
 if(recieved != null)
 {
 // console.log("Recieved Response from database is as : "+recieved);
 if(document.getElementById("track") != null)
 document.getElementById("track").innerText="Sory UserId Has already been taken";
 }
 else
 {
 // console.log("Go On")
 if(document.getElementById("track") != null)
 document.getElementById("track").innerText="UserId Is Available";
 }
 },
 error => { this.errorMessage = error },
 );
 // localStorage.current_user=JSON.parse(JSON.stringify(this.loggedIn));
 
}
 


 document.getElementById("response").innerText=this.successMessage;

ngOnInit() {
 this.registerForm = this.formBuilder.group({
 user_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
 user_id: ['', [Validators.required, Validators.pattern( /(.+)@(.+){2,}\.(.+){2,}/)]],
 phone_no: ['', Validators.pattern(/^[1-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}$/)],
 password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]]
 })
 }

}
