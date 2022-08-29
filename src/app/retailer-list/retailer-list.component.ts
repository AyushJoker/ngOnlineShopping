import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Retailer } from 'src/models/retailer';
import { RetailerService } from '../retailer.service';
import { faArrowLeftLong, faBackward } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-retailer-list',
  templateUrl: './retailer-list.component.html',
  styleUrls: ['./retailer-list.component.css']
})
export class RetailerListComponent implements OnInit {
  retailerlist: Retailer[] = [];
  constructor(private _service: RetailerService) { }

  faShoppingBag=faShoppingBag;
  faSearch=faSearch;
  faArrowLeftLong=faArrowLeftLong
  ngOnInit(): void {
    this._service.getRetailer().subscribe(data => { this.retailerlist = data; console.log(this.retailerlist) });
  }
  delete(id:any)
  {
    confirm("you really want to delete");
    this._service.Deleteretailer(id).subscribe();
  }
}
