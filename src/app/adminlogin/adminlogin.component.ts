import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/models/admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginadmin:Admin;
  constructor(private _service:AdminService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
 onSubmit(myform:any){
  let body=myform.value;
  this._service.CheckLogin(body).subscribe((res)=>{
    if(res.status==200){
      alert("Login Success");
      this.loginadmin=body;
      console.log(res);
      sessionStorage.setItem("username",this.loginadmin.username);
    }
  },(err)=>{alert("There was a problem logging u out");}
  );
 }

}
