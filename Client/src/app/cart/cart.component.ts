import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service.ts';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartAdder:CartService, private router:Router, private route:ActivatedRoute) { }
cartItems;
errorMessage;
presentQuant;
totalAmount=0;
Amount=0;
show=true; 
ngOnInit() {
    this.getProductInCart();

    if(localStorage.getItem('loggedIn')=="Guest")
        this.canBuy=false;
    else
      this.canBuy=true;

        }
canBuy;
hasProducts;
getProductInCart(){


  this.cartAdder.isProductInCart({"user_id":localStorage.getItem('loggedIn')}).subscribe(
    suppliedData => {  this.cartItems = suppliedData
      if(suppliedData.length>0)
        this.hasProducts=true;
      else
        this.hasProducts=false; 
    //console.log(suppliedData[1].quantity)
    this.Amount=0;
    for(let i=0;i<suppliedData.length;i++)
    {this.Amount+=suppliedData[i].quantity*(suppliedData[i].price*(100-suppliedData[i].discount)/100);}
    if(this.Amount !=0)
    this.Amount=this.Amount+500
    this.totalAmount=this.Amount
  
    if(this.totalAmountAmount>1000)
      {this.totalAmount-=500;}

    
  },
                    { error => this.errorMessage = error }
                  );
//return this.cartItems();
}


updateQuantity(quant,prod,usr,i)
{
           if (document.getElementById(prod).innerText > 1 || quant==1)
           {  
              var detail={"prod_id":prod, "user_id":usr, "quantity":quant}
              this.cartAdder.updateQuantity(detail).subscribe(
              suppliedData => { this.successMessage2 = suppliedData 
              this.presentQuant=((suppliedData).value.quantity);
              document.getElementById(prod).innerText=suppliedData.value.quantity;
              document.getElementsByClassName('subTotal')[i].innerText=(suppliedData.value.quantity)*document.getElementsByClassName('price')[i].innerText
            
                var subs=document.getElementsByClassName('subTotal');
                this.totalAmount=0;
                for (let i=0; i<subs.length ;i++)
                {this.totalAmount+=parseInt(subs[i].innerText);}
            
            },
                              { error => this.errorMessage2 = error });
          }
        }
 


order()
{
  console.log("Checking Out Products Now");
  //Generate orderId that is userID+Date in miliseconds 
  var order_date=new Date()
  var orderDetails= {};
  
  orderDetails.status= "open";
  orderDetails.date=order_date;
  
  orderDetails.comp= order_date.getTime();
  localStorage.comp= order_date.getTime();
  
  orderDetails.order_id= localStorage.getItem('loggedIn')+(order_date).getTime();
  orderDetails.action=2;
  //console.log(orderDetails);

  // Making List of products
  //console.log("Making List of products Now ");
  var product_list="";
  var product_ids=[];
  for(let i=0;i<this.cartItems.length;i++)
    {
      //console.log(this.cartItems[i].name)
      product_list+=this.cartItems[i].name;
      product_ids.push(this.cartItems[i].prod_id);

      if((this.cartItems.length-i)>1)
        {product_list+=", ";}
    }

    //console.log(product_list);
    //console.log(product_ids);
    orderDetails.product_list=product_list;
    orderDetails.product_ids=product_ids;
    orderDetails.total_bill=this.totalAmount;
    this.router.navigate(['/profile',orderDetails]);
  // Get All products from the cart 
}




removeItem(usr,prod,i)
{
              
  //console.log("recived parameter is : "+(i);
              // var list=document.getElementById("parentRow"); 
              // list.removeChild(list.childNodes[(i)]);   
              
              
              var detail={"user_id":usr, "prod_id":prod}
             
              this.cartAdder.removeItem(detail).subscribe(
              suppliedData => { this.successMessage2 = suppliedData
              //location.reload();
                //Recalculating The Total
                this.getProductInCart();
                var subs=document.getElementsByClassName('subTotal');
                this.totalAmount=0;
                for (let i=0; i<subs.length ;i++)
                {this.totalAmount+=parseInt(subs[i].innerText);},
                { error => this.errorMessage2 = error });
          }
        }




      }



