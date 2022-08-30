import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartOrder } from 'src/models/cartorder';
import { CartorderService } from '../cartorder.service';
import { CatWiseProd } from 'src/models/catwiseprod';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(private cartService: CartorderService) { }

  ngOnInit(): void {
    
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

}
