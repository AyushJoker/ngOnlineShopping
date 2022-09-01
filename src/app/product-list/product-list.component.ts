import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';
import { faArrowLeftLong, faBackward } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  id: number;
  modifiedproduct: Product;

  productlist: Product[] = [];
  constructor(private _service: ProductService, private activerout: ActivatedRoute, private router: Router) { }
  faArrowLeftLong=faArrowLeftLong;
  faShoppingBag=faShoppingBag;
  faSearch=faSearch;
  ngOnInit(): void {
    this._service.getProducts().subscribe(data => { this.productlist = data; console.log(this.productlist) });

    // this.id = this.activerout.snapshot.params["id"];// route variable 

    // this._service.getProductById(this.id).subscribe(data1 => {
    //   this.modifiedproduct = data1,
    //   console.log(this.id)
  // });
}
  delete(id:any)
  {
    confirm("you really want to delete");
    this._service.DeleteProduct(id).subscribe();
  }

  availability(id: any) {
    
    this._service.getProductById(id).subscribe(data1 => {
      this.modifiedproduct = data1,
      console.log(this.id)
  });

    this._service.AvailableProduct(this.modifiedproduct).subscribe(data =>
      console.log(this.modifiedproduct)
    );
    this.router.navigateByUrl("productlist");
}
}