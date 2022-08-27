import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginuser:User;
  constructor(private _service:UserService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
 onSubmit(myform:any){
  let body=myform.value;
  this._service.CheckLogin(body).subscribe((res)=>{
    if(res.status==200){
      alert("Login Success");
      this.loginuser=body;
      console.log(res);
      sessionStorage.setItem("username",this.loginuser.email);
    }
  },(err)=>{alert("There was a problem logging u out");}
  );
 }
}
