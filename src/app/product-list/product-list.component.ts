import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productlist: Product[] = [];
  constructor(private _service: ProductService) { }

  faShoppingBag=faShoppingBag;
  faSearch=faSearch;
  ngOnInit(): void {
    this._service.getProducts().subscribe(data => { this.productlist = data; console.log(this.productlist) });
  }
  delete(id:any)
  {
    confirm("you really want to delete");
    this._service.DeleteProduct(id).subscribe();
  }
}