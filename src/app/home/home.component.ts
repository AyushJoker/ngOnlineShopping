import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  faShoppingBag=faShoppingBag;
  faSearch=faSearch;
  ngOnInit(): void {
  }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}