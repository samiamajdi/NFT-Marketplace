import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { AccountModule } from './account/account.module';
import { TestService } from './services/test.service';
import {delay} from 'utils-decorators';
@Injectable({
  providedIn: 'root'
})
export class GetUsernameService {

  constructor(private http: HttpClient,private t:TestService) {
    
    this.pp=this.t.getAccounts()
   }
pp!:any;
name!:any;
ngOnInit(){
 this.wassup();}
  //  getacc(){
  //   =this.t.getAccounts();
  //   console.log(this.pp+'looooooooooooooooooooooooooooooooooooooooooooooooo')
  //  } 
  @delay(1000)
  wassup(){
    this.name=this.t.was();
    
    }
   getUser(){
// console.log("getting this user "+this.pp);
    return axios.get("http://localhost:9191/product/username/getUsername/"+this.t.was()) ;

}
}
