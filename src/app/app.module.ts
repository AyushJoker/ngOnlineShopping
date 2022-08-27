import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
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

   // CategoryComponent,
    

  ],
  imports: [
    FontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    SlickCarouselModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
