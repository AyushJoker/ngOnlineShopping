import { Component, OnInit } from '@angular/core';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faExpand} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  faShoppingCart= faShoppingCart;
  faExpand=faExpand;
  ngOnInit(): void {
  }

}
