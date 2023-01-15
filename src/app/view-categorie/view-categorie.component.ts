import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { NFT } from '../models/NFT';

@Component({
  selector: 'app-view-categorie',
  templateUrl: './view-categorie.component.html',
  styleUrls: ['./view-categorie.component.css']
})
export class ViewCategorieComponent implements OnInit {
nft!:any;
dem:NFT=new NFT();
a!:any;
o!:any;
  constructor(private route: ActivatedRoute,private y:CategorieService,private router: Router) { }
varr!:any;
  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.varr= paramsId['a']; 

  });
  this.y.nft(this.varr).then(res=>{
    
this.a=res.data;
this.dem=this.a;
this.o=this.dem;

  })


}

hey(){
  let cat=this.varr;
  this.router.navigate(['mint',cat]);
}
}
