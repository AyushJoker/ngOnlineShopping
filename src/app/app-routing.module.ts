import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';

import { ProductsingleComponent } from './productsingle/productsingle.component';
import { ProductComponent } from './product/product.component';
import { CatwiseproductComponent } from './catwiseproduct/catwiseproduct.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { RetailerdashComponent } from './retailerdash/retailerdash.component';
import { RetailerListComponent } from './retailer-list/retailer-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RetailerEditComponent } from './retailer-edit/retailer-edit.component';
import { RetailerAddComponent } from './retailer-add/retailer-add.component';
const routes: Routes = [
  { path:"home", component:HomeComponent},
 { path:"", component:SignupComponent},
 { path:"header", component:HeaderComponent},
  { path:"signup", component:SignupComponent },
  { path:"login", component:LoginComponent },
  { path:"forgetpassword", component:ForgetpasswordComponent },
  { path:"profile-details", component:ProfileDetailsComponent },
  { path:"order", component:OrdersComponent },
  { path:"cart", component:CartComponent },
  { path:"productsingle/:id/:id1", component:ProductsingleComponent },
  { path:"product", component:ProductComponent },
  {path:"catwiseprod/:id", component:CatwiseproductComponent},
  {path:"retailerlogin",component:RetailerLoginComponent},
  {path:"retailerlist", component:RetailerListComponent},
  {path:"retaileredit/:id", component:RetailerEditComponent},
  {path:"retaileradd", component:RetailerAddComponent},
  {path:"retailerdash", component:RetailerdashComponent},
  {path:"productlist", component:ProductListComponent},
  {path:"productedit/:id",component:ProductEditComponent},
  {path:"productadd",component:ProductAddComponent},
  {path:"adminlogin",component:AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
