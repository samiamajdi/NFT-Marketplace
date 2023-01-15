import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ethers } from 'ethers';
import { NIFTY } from 'web3modal/dist/providers/injected';
import { PinataService } from '../services/pinata.service';
import { TestService } from '../services/test.service';
import { WebtestService } from '../services/webtest.service';
//import { deploy } from '@nomiclabs/hardhat-ethers';
import {NFT} from '../models/NFT'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // Declare a private variable to store the provider
// private provider: ethers.providers.JsonRpcProvider;
shortLink: string = "";
loading: boolean = false; // Flag variable
  file: File | undefined;
 constructor( private test:TestService ,private pinata : PinataService,private router: Router) {

 }

  ngOnInit(): void {
//  this.test.log()
 this.getacc()
  //  this.getAll()
  }
  getAll(){
  this.test.getAllItems()
}
bol!:boolean

profile(){
   this.test.loginmsk();
   this.test.profilee();


}
getacc(){
  this.test.getAccounts()
}
}
