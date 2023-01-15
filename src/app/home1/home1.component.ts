import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ethers } from 'ethers';
import { PinataService } from '../services/pinata.service';
import { TestService } from '../services/test.service';
import { WebtestService } from '../services/webtest.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

   // Declare a private variable to store the provider
// private provider: ethers.providers.JsonRpcProvider;
name!:any;
shortLink: string = "";
price!:any;
loading: boolean = false; // Flag variable
  file: File | undefined;
 constructor( private route: ActivatedRoute,private eth:WebtestService ,private pinata : PinataService, private test:TestService) {
  this.test.loginmsk()
 }
varr:any;
  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.varr= paramsId['cat']; 
      console.log("heeeeeeeeeeeeeeeeyoooooooooooooo");
      console.log(this.varr);
      console.log("heeeeeeeeeeeeeeeeyoooooooooooooo");

  });
  
  }

  profile(){
    this.test.loginmsk();
    this.test.profilee();
 }
  onChange($event:any) {
    this.file = $event.target.files[0];
}

tal!:any;
cid!:any;

onUpload() {
    this.loading = !this.loading;
    this.tal = this.file;
    console.log(this.price)
    console.log(this.tal)

    this.test.add(this.tal,this.price,this.varr,this.name);
    // this.cid="https://gateway.pinata.cloud/ipfs/"+this.test.hey();

// console.log(this.price)
// console.log(this.file)
}



pp!:any;

//    getbalance (){
//      this.pp=  this.test.getAddress();
// console.log(this.pp)
//   }



}
