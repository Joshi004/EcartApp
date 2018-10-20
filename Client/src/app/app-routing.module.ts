import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { NotificationComponent } from './notification/notification.component'
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component'
import { SearchComponent } from './search/search.component'
import { SearchxComponent } from './searchx/searchx.component'

const routes: Routes = [
 
 //{path: '', component: AppComponent},
 {path: '', redirectTo: "/home", pathMatch:"full"},
 {path: 'login', component: LoginComponent},
 {path: 'home', component: HomeComponent},
 {path: 'cart', component:CartComponent},
 {path: 'signup', component: SignupComponent},
 {path: 'wishlist', component: WishlistComponent},
 {path: 'orders', component: OrdersComponent},
 {path: 'notification', component: NotificationComponent},
 {path: 'profile', component: ProfileComponent},
 {path: 'search/:name', component: SearchComponent},
 {path: 'searchx/:name', component: SearchxComponent},
 {path: 'login/:user_id', component: LoginComponent},
 {path: 'home/:prod_id', component: DetailsComponent}
 {path: 'search/:prod_id', component: DetailsComponent}
 {path: 'wishlist/:prod_id',component: DetailsComponent}
 {path: '**', component: PageNotFoundComponent},
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent, SignupComponent, PageNotFoundComponent]