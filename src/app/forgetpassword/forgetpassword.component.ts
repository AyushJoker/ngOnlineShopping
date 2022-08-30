import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  loginemail:User;
  constructor(private _service:UserService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
 onSubmit(myform:any){
  let body=myform.value;
  this._service.CheckEmail(body).subscribe((res)=>{
    if(res.status==200){
      this.loginemail=body;
      console.log(res);
      sessionStorage.setItem("loginname",this.loginemail.email);
      this.route.navigateByUrl("forgetpasswordedit");
    }
  },(err)=>{alert("Please enter the correct email");}
  );
 }
}
