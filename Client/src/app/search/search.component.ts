import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
 selector: 'app-search',
 templateUrl: './search.component.html',
 styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 constructor(private route:ActivatedRoute, private obj:HomeService, private router:Router) { }
products;
ngOnInit() {
this.toSearch=this.route.snapshot.paramMap.get('name');
this.getSearch();
}
error=0;
getSearch() {
 
this.toSearch=this.route.snapshot.paramMap.get('name');
 // console.log("In Search Method : "this.toSearch);
 this.obj.getSearch({"name":this.toSearch}).subscribe(
 suppliedData => {this.products = suppliedData
 document.getElementById('err').innerText=""
 if(suppliedData.length==0)
 {
 this.error=1
 document.getElementById('err').innerText="Sorry No Products Found"
 }
 // console.log(suppliedData.length);
 // console.log("Eror is "+this.error);
 },
 error => this.errorMessage = error); 
 }

redirect(add)
{
 this.router.navigate(['/home',add);
}

}
