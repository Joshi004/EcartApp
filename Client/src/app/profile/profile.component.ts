import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup/signup.service';
import { LoginService } from '../login/login.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
 selector: 'app-profile',
 templateUrl: './profile.component.html',
 styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 constructor (private route:ActivatedRoute, private router:Router) { }
 ngOnInit() {
 // console.log(this.route.snapshot.paramMap.get('comp')+" comparing Local is "+localStorage.getItem('comp'));
 this.param=this.route.snapshot.paramMap; 
 // console.log("This is in profile Noew "+this.param.get('status'));
 if(localStorage.getItem('comp') == this.param.get('comp'))
 this.select(this.param.get('action'))
 }
param;
user=false;
card=true;
address=true;
select(cur_id)
{

 for(let i=1;i<=3;i++)
 {
 var tabx=document.getElementById(i);
 tabx.classList.remove('active');
 }
 var tab = document.getElementById(cur_id);
 tab.classList.add('active');

 this.user=true;
 this.address=true;
 this.card=true;
 
 if(cur_id == 1) 
 this.user=false;
 
 if(cur_id == 2) 
 this.address=false;
 
 if(cur_id == 3) 
 this.card=false;
 
 }


 } 
