import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {
name!:any;
  constructor(private a:CategorieService) { }

  ngOnInit(): void {
  }
  createCategory(){
    this.a.createCategorie(this.name).then();
  }

}
