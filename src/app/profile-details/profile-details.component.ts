import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/models/user';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
 
  constructor(private _service:UserService,private router:Router,private active:ActivatedRoute) { }
  Id: number;
  currentuser:User ;
  ngOnInit(): void {
    this.Id = this.active.snapshot.params["id"];
    console.log(Number(this.Id));
    this._service.getUsersById(this.Id).subscribe(data=>
      {
        this.currentuser=data;
        console.log(this.currentuser)
      }
      );
  }

}
