import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CatService } from '../cat.service';
import { Category } from 'src/models/category';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catlist: Category[] = [];
  constructor(private _service: CatService) { }
  faShoppingBag=faShoppingBag;
  faSearch=faSearch;
  ngOnInit(): void {
    this._service.getCategories().subscribe(data => { this.catlist = data; console.log(this.catlist) });
  }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}