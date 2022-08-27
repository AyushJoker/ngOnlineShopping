import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _service:UserService,private route:Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(myform:any){
    let body=myform.value;
    //let body={"userName":""};
    this._service.AddUser(body).subscribe(data=>console.log(body));
    this.route.navigateByUrl("/home");
  }
}

