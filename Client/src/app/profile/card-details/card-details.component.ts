import { Component, OnInit } from '@angular/core';
@Component({
 selector: 'app-card-details',
 templateUrl: './card-details.component.html',
 styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

 constructor() { }

selectedCard;
ngOnInit() {
 
 }

hideEdit=true;
hideList=false;


hideBackButton=true;
hideAddButton=false;

editIt()
{
// console.log("This is displayed in parent : "+this.selectedCard);

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
 this.selectedCard="addNewCard" 
 this.hideEdit=false;
 this.hideList=true;

 
 this.hideBackButton=false;
 this.hideAddButton=true;
}


}
