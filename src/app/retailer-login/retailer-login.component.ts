import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Retailer } from 'src/models/retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit {
  loginretail:Retailer ;
  constructor(private _service:RetailerService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
 onSubmit(myform:any): void {
    let body=myform.value;
  this._service.CheckLogin(body).subscribe((res)=>{
    if(res.status==200){
      alert("Login Success");
      this.loginretail=body;
      console.log(res);
      sessionStorage.setItem("email",this.loginretail.email);
      this.route.navigateByUrl("productlist");
    }
  },(err)=>{alert("There was a problem logging in retailer");}
  );
  }

}
