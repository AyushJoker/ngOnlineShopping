import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CatService } from '../cat.service';
import { Category } from 'src/models/category';
import { CatwiseprodService } from '../catwiseprod.service';
import { CatWiseProd } from 'src/models/catwiseprod';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  catlist: Category[] = [];
  products:CatWiseProd[]=[]
  constructor(private catservice:CatwiseprodService,private route:Router,private _service: CatService,private activeroute:ActivatedRoute) { }
  
  faShoppingBag=faShoppingBag;
  faSearch=faSearch;
  ngOnInit(): void {
    this._service.getCategories().subscribe(data => { this.catlist = data; console.log(this.catlist) });
  }
  onSubmit(myform:any){
    let searchitem=myform.value.pName;
    this.route.navigate(['/searchresult', searchitem])   
  }
  
}
