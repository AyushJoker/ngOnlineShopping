import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retailer } from 'src/models/retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-add',
  templateUrl: './retailer-add.component.html',
  styleUrls: ['./retailer-add.component.css']
})
export class RetailerAddComponent implements OnInit {
  newretailer:Retailer;
  constructor(private _service:RetailerService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myForm:any)
  {this.newretailer=myForm.value;
  this._service.Addretailer(myForm.value).subscribe(data=>
  {
    console.log(myForm.value)
  }
  );
  
  //this.router.navigateByUrl("cat-list");
  }
}
