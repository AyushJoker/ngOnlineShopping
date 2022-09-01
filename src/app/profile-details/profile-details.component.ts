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
 
  constructor(private _service:UserService,private route:Router,private active:ActivatedRoute) { }
  username=sessionStorage.getItem("loginname");
  currentuser:User ;
  ngOnInit(): void {
    console.log(this.username);
    this._service.getUserByUsername(this.username).subscribe(data=>
      {
        this.currentuser=data;
        console.log(this.currentuser)
      }
      );
  }
  LogOut(){
    sessionStorage.clear()
    this.route.navigateByUrl("signup")
  }

}
