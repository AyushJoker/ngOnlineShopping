import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgetpassword-edit',
  templateUrl: './forgetpassword-edit.component.html',
  styleUrls: ['./forgetpassword-edit.component.css']
})
export class ForgetpasswordEditComponent implements OnInit {
  username=sessionStorage.getItem("loginname");
 
 user: User;
 newpassword:string
 confirmpassword:string
  constructor(private _service: UserService, private activerout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.username);
    this._service.getUserByUsername(this.username).subscribe(data => {
      this.user= data;
      console.log(this.user)
    });
  }
  onSubmit(modifieduser: User) {
    modifieduser.password=this.newpassword
    modifieduser.confirm_Password=this.confirmpassword
    this._service.Updatepass(modifieduser).subscribe(data =>
      console.log(modifieduser)
    );
    alert("Password updated");
    this.router.navigateByUrl("login");
  }
}

