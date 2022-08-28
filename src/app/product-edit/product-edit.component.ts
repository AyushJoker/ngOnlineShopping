import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id:number;
  modifiedproduct:Product;
  
product:Product;

  constructor(private _service :ProductService, private activerout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id= this.activerout.snapshot.params["id"];// route variable 

    this._service.getProductById(this.id).subscribe(data=>
      {this.modifiedproduct=data,
      console.log(this.id)});
  }
  onSubmit(modifiedproduct:any)
  {
  this._service.UpdateProduct(this.modifiedproduct).subscribe(data=>
    console.log(modifiedproduct)
    );
  this.router.navigateByUrl("productlist");
  }
}
