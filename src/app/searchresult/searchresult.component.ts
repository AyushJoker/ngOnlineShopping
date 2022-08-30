import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { CatWiseProd } from 'src/models/catwiseprod';
import { CatwiseprodService } from '../catwiseprod.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  
  constructor(private _service:CatwiseprodService,private router:Router,private active:ActivatedRoute) { }
  Id: string;
  prodlist:CatWiseProd[]=[];
  ngOnInit(): void {
    this.Id = this.active.snapshot.params["id"];
    this._service.getProdbySearch(this.Id).subscribe(data => { this.prodlist = data; console.log(this.prodlist) });
  }
}
