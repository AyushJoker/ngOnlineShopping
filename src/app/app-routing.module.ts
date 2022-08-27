import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { ProductComponent } from './product/product.component';
import { CatwiseproductComponent } from './catwiseproduct/catwiseproduct.component';
const routes: Routes = [
  { path:"home", component:HomeComponent},
 { path:"", component:SignupComponent},
 { path:"header", component:HeaderComponent},
  { path:"signup", component:SignupComponent },
  { path:"login", component:LoginComponent },
  { path:"forgetpassword", component:ForgetpasswordComponent },
  { path:"profile-details", component:ProfileDetailsComponent },
  { path:"edit-address", component:EditAddressComponent },
  { path:"address", component:AddressComponent },
  { path:"order", component:OrdersComponent },
  { path:"cart", component:CartComponent },
  { path:"productsingle/:id/:id1", component:ProductsingleComponent },
  { path:"product", component:ProductComponent },
  {path:"catwiseprod/:id", component:CatwiseproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
