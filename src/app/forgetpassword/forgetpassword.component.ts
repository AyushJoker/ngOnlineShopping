import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  loginemail:User;
  OTP:number;
otpGenerated:boolean=false;
  constructor(private _service:UserService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  RequestOtp(myform:any){
    let body=myform.value;
    this._service.CheckEmail(body).subscribe((res)=>{
      if(res.status==200){
        this.OTP = Math.floor(1000 + Math.random() * 9000);
          console.log(this.OTP);
          this.otpGenerated=true
        this.loginemail=body;
        console.log(res);
      }
    },(err)=>{alert("Enter a Correct Email");}
    );
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
  },(err)=>{alert("Please Enter the correct email");}
  );
 }

}
