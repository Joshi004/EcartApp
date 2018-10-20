import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
 selector: 'app-searchx',
 templateUrl: './searchx.component.html',
 styleUrls: ['./searchx.component.css']
})
export class SearchxComponent implements OnInit {

 constructor(private route:ActivatedRoute, private router:Router) { }
 
 ngOnInit() 
 {
 var toSearch
 toSearch=this.route.snapshot.paramMap.get('name');
 this.router.navigate(['/search'toSearch]);

 } 

}