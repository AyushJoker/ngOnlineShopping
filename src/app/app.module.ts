import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { ProductComponent } from './product/product.component';
import { CatwiseproductComponent } from './catwiseproduct/catwiseproduct.component';

import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { RetailerdashComponent } from './retailerdash/retailerdash.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RetailerListComponent } from './retailer-list/retailer-list.component';
import { RetailerEditComponent } from './retailer-edit/retailer-edit.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RetailerAddComponent } from './retailer-add/retailer-add.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
//import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ProfileDetailsComponent,

    OrdersComponent,
    CartComponent,
    ProductsingleComponent,
    ProductComponent,
    CatwiseproductComponent,
    RetailerLoginComponent,
    RetailerdashComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductListComponent,
    RetailerListComponent,
    RetailerEditComponent,
    AdminloginComponent,
    RetailerAddComponent,
    AdmindashboardComponent,
  ],
  imports: [
    FontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
