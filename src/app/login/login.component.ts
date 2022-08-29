import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { JsonPipe } from '@angular/common';
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
      this.loginuser=body;
      console.log(res);
      sessionStorage.setItem("loginname",this.loginuser.email);
      this.route.navigateByUrl("home");
    }
  },(err)=>{alert("Please enter the correct login details");}
  );
 }
}
