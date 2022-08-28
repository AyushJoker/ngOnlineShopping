import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  newproduct:Product;
  constructor(private _service:ProductService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myForm:any)
  {this.newproduct=myForm.value;
  this._service.AddProduct(myForm.value).subscribe(data=>
  {
    console.log(myForm.value)
  }
  );
  
  //this.router.navigateByUrl("cat-list");
  }
}
