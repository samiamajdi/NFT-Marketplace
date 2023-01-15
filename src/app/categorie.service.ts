import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }
  createCategorie(name:string){
    return axios.post("http://localhost:9191/product/category/create?label="+name,{});
  }
  liste(){
    return axios.get("http://localhost:9191/product/category/getAll");
  }
  nft(id:string){
    return axios.get("http://localhost:9191/product/nft/getByCat/"+id);
  }
}
