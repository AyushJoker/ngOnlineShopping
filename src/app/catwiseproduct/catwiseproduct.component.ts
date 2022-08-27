import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatWiseProd } from 'src/models/catwiseprod';
import { CatwiseprodService } from '../catwiseprod.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-catwiseproduct',
  templateUrl: './catwiseproduct.component.html',
  styleUrls: ['./catwiseproduct.component.css']
})
export class CatwiseproductComponent implements OnInit {

  constructor(private _service:CatwiseprodService,private router:Router,private active:ActivatedRoute) { }
  Id: number;
  faCartShopping =faCartShopping 
  faHeart=faHeart
  catprodlist: CatWiseProd[] = [];
  ngOnInit(): void {
    this.Id = this.active.snapshot.params["id"];
    this._service.getCatProdById(this.Id).subscribe(data => { this.catprodlist = data; console.log(this.catprodlist) });
  }

}

