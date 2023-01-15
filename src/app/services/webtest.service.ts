import { Injectable } from '@angular/core';
import {   Contract, ethers, Signer, utils } from 'ethers';
import { Observable } from 'rxjs';
import axios from 'axios';
import { PinataService } from './pinata.service';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { Router } from '@angular/router';
// const tchatAbi = require('../abi/Contrat1.json');
const tchatAbi = require('../abi/NFTMarcketplace.json');
declare let window: any;
let getAll: null

const web3 = new Web3(window.ethereum);

@Injectable({
  providedIn: 'root'
})
export class WebtestService {
  private signer!: Signer;

  private provider!: ethers.providers.Web3Provider;
  private contractAddress: string =
  '0x5FbDB2315678afecb367f032d93F642f64180aa3';

  public acco: any = null;
  public account: any = null;
  private contract: any;
  public currentAddress:any;
p!:any;
  constructor(private pinata : PinataService,private router: Router) {
  }

private web3: any;
 connec!:any;
 c!:any;


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

      this.account = accounts[0];
this.p=this.account



    }

const a= this.account
 this.contract=new ethers.Contract(this.contractAddress,tchatAbi.abi,this.signer)
//  this.router.navigate(["profile"]);
}
}
cid!: Promise<string>;

//   conn(){
//      return  this.provider.getNetwork().then((network) => {
//         if (network.chainId ==1337) {
//           console.log('Provider is connected to the local hardhat network');
//         } else {
//           console.log('Provider is not connected to the local hardhat network');
//         }
//       });
//      }
// //pour savoir le balance du notre account
//    getBalance(){
//     return  this.provider.getBalance('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266').then((balance) => {
//       console.log(`Balance: ${balance.toString()}`);
//     });
//    }

// la fonction qui permet d'ajouter un nft dans notre blockchain
  //  async add(recipient: string, tokenURI: string): Promise<string>  {
  //     console.log(this.pinata.addToPinata(tokenURI));
  //     console.log(recipient);
  //     this.cid= this.pinata.addToPinata(tokenURI);
  //     const options = {
  //       gasLimit: 3000000,
  //       value: 0,
  //     };
  //   // return await this.contract.mintNFT( recipient,  "ipfs://"+this.cid).call();
  //   return await this.contract.mintNFT(recipient,  "ipfs://"+this.cid).then((result: any) => {
  //     console.log(result);
  //   });

  //  }
}

