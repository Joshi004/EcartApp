import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeService } from './home/home.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './profile/user-details/user-details.component';
import { AddressDetailsComponent } from './profile/address-details/address-details.component';
import { EditAddressComponent } from './profile/address-details/edit-address/edit-address.component';
import { CardDetailsComponent } from './profile/card-details/card-details.component';
import { ListAddressComponent } from './profile/address-details/list-address/list-address.component';
import { EditCardComponent } from './profile/card-details/edit-card/edit-card.component';
import { ListCardComponent } from './profile/card-details/list-card/list-card.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { SearchxComponent } from './searchx/searchx.component';
@NgModule({
 declarations: [
 AppComponent,
 routingComponents,
 SignupComponent,
 PageNotFoundComponent,
 DetailsComponent,
 CartComponent,
 WishlistComponent,
 OrdersComponent,
 ProfileComponent,
 UserDetailsComponent,
 AddressDetailsComponent,
 EditAddressComponent,
 CardDetailsComponent,
 ListAddressComponent,
 EditCardComponent,
 ListCardComponent,
 NotificationComponent,
 SearchComponent,
 SearchxComponent
 ],
 imports: [ 
 BrowserModule,
 HttpClientModule,
 AppRoutingModule,
 FormsModule,
 ReactiveFormsModule
 ],
 providers: [HomeService],
 bootstrap: [AppComponent]
})
export class AppModule { }