import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../product.service';
import { Product } from 'src/models/product';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faExpand} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prodlist: Product[] = [];
  constructor(private _service: ProductService) { }
  faShoppingCart= faShoppingCart;
  faExpand=faExpand;
  ngOnInit(): void {
    this._service.getProducts().subscribe(data => { this.prodlist = data; console.log(this.prodlist) });
  }

}
