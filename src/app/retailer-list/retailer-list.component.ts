import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Retailer } from 'src/models/retailer';
import { RetailerService } from '../retailer.service';
import { faArrowLeftLong, faBackward } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-retailer-list',
  templateUrl: './retailer-list.component.html',
  styleUrls: ['./retailer-list.component.css']
})
export class RetailerListComponent implements OnInit {
  id: number;
  modifiedretailer: Retailer;


  retailerlist: Retailer[] = [];
  constructor(private _service: RetailerService, private activerout: ActivatedRoute, private router: Router) { }

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
  availability(id: any) {
    
    this._service.getRetailerById(this.id).subscribe(data1 => {
      this.modifiedretailer = data1,
      console.log(this.id)
    });

    this._service.AvailableRetailer(this.modifiedretailer).subscribe(data =>
      console.log(this.modifiedretailer)
    );
    this.router.navigateByUrl("retailerlist");
}
}
