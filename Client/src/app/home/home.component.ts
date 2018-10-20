import { Component, OnInit, Output } from '@angular/core';
import { HomeService } from './home.service';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css'],
 providers: [HomeService]
})
export class HomeComponent implements OnInit {
 laptops: any;
 clothes: any;
 phones: any;
 shoes: any;
 errorMessage: string;
deals;
// obj: HomeService = new HomeService();
constructor(private obj: HomeService,) { }



getLaptops() {
 this.obj.getProducts({category:"laptop"}).subscribe(
 suppliedData => this.laptops = suppliedData,
 error => this.errorMessage = error); 
 }

 getClothes() {
 this.obj.getProducts({category:"clothes"}).subscribe(
 suppliedData => this.clothes = suppliedData,
 error => this.errorMessage = error); 
 }

 getPhones() {
 this.obj.getProducts({category:"phone"}).subscribe(
 suppliedData => this.phones = suppliedData,
 error => this.errorMessage = error); 
 }

 getDeals() {
 this.obj.getProducts({category:"deal"}).subscribe(
 suppliedData => this.deals = suppliedData,
 error => this.errorMessage = error); 
 }

 
 ngOnInit() {
 this.getLaptops(),
 this.getClothes(),
 this.getPhones(),
 this.getDeals();
 //this.getSearches();
 {
 
 //localStorage.loggedIn="Guest";
 //location.reload();
 }
 }

}