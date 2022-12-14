import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  username=sessionStorage.getItem("loginname");
  modifieduser  :User;
  
user:User;

  constructor(private _service :UserService, private activerout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
       console.log(this.username);
  this._service.getUserByUsername(this.username).subscribe(data=>
    {
      this.modifieduser=data;
      console.log(this.modifieduser)
    });
  }
  onSubmit(modifieduser:any)
  {
  this._service.UpdateUser(this.modifieduser).subscribe(data=>
    console.log(modifieduser)
    );
  this.router.navigateByUrl("profile-details");
  }



}

