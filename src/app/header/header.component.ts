import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CatService } from '../cat.service';
import { Category } from 'src/models/category';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  catlist: Category[] = [];
  constructor(private _service: CatService) { }

  faShoppingBag=faShoppingBag;
  faSearch=faSearch;
  ngOnInit(): void {
    this._service.getCategories().subscribe(data => { this.catlist = data; console.log(this.catlist) });
  }
}
