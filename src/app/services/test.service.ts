import { Injectable } from '@angular/core';
import {   BigNumber, Contract, ethers, Signer, utils } from 'ethers';
import { Observable } from 'rxjs';
import axios from 'axios';
import { PinataService } from './pinata.service';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import {NFT} from '../models/NFT'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetUsernameService } from '../get-username.service';
const tchatAbi = require('../abi/NFTMarcketplace.json');
declare let window: any;
let getAll: null

const web3 = new Web3(window.ethereum);
@Injectable({
  providedIn: 'root'
})
export class TestService {
  private signer!: Signer;

  private provider!: ethers.providers.Web3Provider;
  private contractAddress: string =
  '0x5FbDB2315678afecb367f032d93F642f64180aa3';

  public acco: any = null;
  public account: any = null;
  private contract: any;
  public currentAddress:any;
p!:any;
  constructor(private pinata : PinataService,private router: Router,private http:HttpClient) {
    
  }

private web3: any;
 connec!:any;
 c!:any;
//  async log(){
//   if(this.account==null){
//     console.log("Account is null -- Fetching account")
//     const accounts =await window.ethereum.request({ method: 'eth_requestAccounts' });

//     this.account = accounts[0]
//     console.log(this.account)
// this.p=this.account



//   }

//  }
  async loginmsk(){


    // / const web3Modal = new Web3Modal()
    // const connection = await web3Modal.connect()

     this.web3 = new Web3Modal()
     this.connec= await this.web3.cachedProvider;
this.c= this.connec
    if (!this.connec) {
      const connection = await this.web3.connect();

     this.provider = new ethers.providers.Web3Provider(connection)
     this.signer = this.provider.getSigner()
console.log(this.signer.getAddress())
    if(this.account==null){
      console.log("Account is null -- Fetching account")
      const accounts =await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log("waaaaaaaaaaaachwaaaaaaaaa");
// console.log(accounts[0]);
this.p=accounts[0];
//       this.account = accounts[0];
// this.p=this.account
console.log("this is my p variable");
console.log(this.p);
console.log("yaaaaaaassssssssssssssss");
console.log(this.p+'etyryetryetryrt')

    }

const a= this.account
 this.contract=new ethers.Contract(this.contractAddress,tchatAbi.abi,this.signer)
//  this.router.navigate(["profile"]);
}
}


profilee() {
if(this.c!=undefined){
   this.router.navigate(["profile"]);
}


}
cid!: Promise<string>;




hey(){
  return this.cid;
}
a!:any;
ipfslink!:string;
 async add( tokenURI: string, price:any,categorie:string,name:string): Promise<string>  {

  // this.a=this.http.post("http://localhost:9191/product/nft/"+name+"/"+this.p+"/"+price+"/"+this.cid+"/"+categorie,{});
  console.log(tokenURI)
      console.log(this.pinata.addToPinata(tokenURI));
this.pinata.addToPinata(tokenURI).then(res=>{this.ipfslink=res;})
      this.cid=this.pinata.addToPinata(tokenURI);
      console.log("wowowowowoooooooooooooow");
      console.log(this.cid);
      console.log("wowowowooooooooooow");
      // console.log("http://localhost:9191/product/nft/"+name+"/"+this.p+"/"+price+"/"+this.cid+"/"+categorie);
this.a=axios.post("http://localhost:9191/product/NFT/"+name+"/"+this.p+"/"+price+"/"+this.ipfslink+"/"+categorie,{});

const t= await this.contract.createToken("ipfs://"+this.cid, price).sendTransaction({
    from:this.p,
    gas: '6721975',
    gasPrice: '20000000',
    value: ethers.utils.parseEther(price),
    to: this.contractAddress // contract address

  }
).then((result: any) => {
  console.log(result);
});
  return t;
 }




//  : Promise<NFT[]>

    async getAllItems(){
console.log(this.p)
     await this.contract.getAllItems().call(
        {

          from:this.p,

          to: this.contractAddress  // contract address
        }
      )
      .then((value: any) => {
        getAll= value;
        console.log(value);
        // Expected output: "Success!"

      });

return getAll;
    }


was(){return this.p;
}


   async getAccounts() {

      
  this.loginmsk()
  console.log(this.p+'tololololo')
  console.log('hqlq '+this.p)
      return this.p;
      
  
      
    }
}





