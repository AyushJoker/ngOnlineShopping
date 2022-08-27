import { Component, OnInit } from '@angular/core';
import { faArrowLeftLong, faBackward, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { CatWiseProd } from 'src/models/catwiseprod';
import { CatwiseprodService } from '../catwiseprod.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  constructor(private _service:CatwiseprodService,private router:Router,private active:ActivatedRoute) { }
  faArrowLeftLong=faArrowLeftLong;
  faAngleDoubleLeft=faAngleDoubleLeft;
  faShoppingCart=faShoppingCart
  Id: number;
  ID1:number
  currentproductlist:CatWiseProd[]=[] ;
  ngOnInit(): void {
    this.Id = this.active.snapshot.params["id"];
    this.ID1=this.active.snapshot.params["id1"];
    console.log(Number(this.Id));
    this._service.getSingleProd(this.Id,this.ID1).subscribe(data=>
      {
        this.currentproductlist=data;
        console.log(this.currentproductlist)
      }
      );
  }
}

