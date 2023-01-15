import { Component, OnInit } from '@angular/core';
import { GetUsernameService } from '../get-username.service';
import {user}from '../models/users';
import { TestService } from '../services/test.service';
import {delay} from 'utils-decorators';
@Component({
  selector: 'app-profilecontainer',
  templateUrl: './profilecontainer.component.html',
  styleUrls: ['./profilecontainer.component.css']
})
export class ProfilecontainerComponent implements OnInit {
name!:any;
  constructor(private a:GetUsernameService,private test:TestService) { 
  
    
    
    // console.log(this.name);
  }
  @delay(1000)
hello(){
  console.log("hello function");
  this.a.getUser().then((res)=>{this.name=res.data;
  console.log(this.name);});
  

    
}
  ngOnInit(): void {
    // this.gg();
    this.hello();
  }
  user : user = new user() ;
  users : user[] = []
  performance(){
    this.user.sFirstname = "ffn";
    this.user.sLastname = "nnf";
  }
//   gg(){
//     this.a.getUser().subscribe(res=>{
// console.log(res);
//     });
//   }
}
