import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Category } from '../models/category';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {
liste!:any;
  constructor(private c:CategorieService,private router: Router) { 
    
  }
 
  create(){
    this.router.navigate(["mint"]);
  }
cato:Category=new Category();
b!:any;
  ngOnInit(): void {
    this.c.liste().then((res)=>{
      console.log(res);
    this.liste=res.data;
    this.cato=this.liste;
    this.b=this.cato;
    console.log(this.liste[0].label);
    });
  }
  view(a:any){
    // console.log(a);
    this.router.navigate(['viewCategorie',a]);
  }

}
