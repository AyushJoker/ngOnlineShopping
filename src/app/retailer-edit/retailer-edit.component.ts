import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Retailer } from 'src/models/retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-edit',
  templateUrl: './retailer-edit.component.html',
  styleUrls: ['./retailer-edit.component.css']
})
export class RetailerEditComponent implements OnInit {
  id:number;
  modifiedretailer:Retailer;
  
retailer:Retailer;

  constructor(private _service :RetailerService, private activerout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id= this.activerout.snapshot.params["id"];// route variable 

    this._service.getRetailerById(this.id).subscribe(data=>
      {this.modifiedretailer=data,
      console.log(this.id)});
  }
  onSubmit(modifiedretailer:any)
  {
  this._service.Updateretailer(this.modifiedretailer).subscribe(data=>
    console.log(modifiedretailer)
    );
  this.router.navigateByUrl("retailerlist");
  }



}
