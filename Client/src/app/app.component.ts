import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

//obj:AppService;

export class AppComponent {
 title = 'Ekart Application';
 
constructor(private serve:AppService,private router:Router) {}

isGuest:boolean = false;
isTrusted:boolean= true;
loggedIn;
profile="/profile";
 logout(){
 if (confirm("You Are About to Log Out.")) 
 {
 localStorage.loggedIn="Guest";
 localStorage.currentUserName="Guest"
 location.reload(); 
 }}
 
sendSearch(searched){
console.log("Search This : "searched):
this.router.navigate(['/searchx',searched]);


}

 
 ngOnInit(){
 
if(typeof(localStorage.getItem("loggedIn"))=='undefined' || localStorage.getItem("loggedIn")==null){
 // alert("Logging In As Guest"); 
 localStorage.loggedIn="Guest";
 localStorage.currentUserName="Guest"
 this.loggedIn="Guest";
 //cartNo=localStorage.getItem('cartNo');
}
else{
 // alert("Local Login Available")
 // alert("Current Type is "+ typeof(localStorage.getItem("loggedIn")));
 this.loggedIn=localStorage.getItem('currentUserName');
}
// alert(this.loggedIn + " is the value of loggedIn in Init");
 
if (this.loggedIn == "Guest")
 {
 this.isGuest=true;
 this.isTrusted=false;
 //alert("Therefore isGuest is set to "+this.isGuest);
}
 else
 {
 this.isGuest=false;
 this.isTrusted=true;
 // alert("Therefore isGuest is set to "+this.isGuest);
 }

 }

}
