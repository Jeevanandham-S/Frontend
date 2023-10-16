import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  categoryList:any;
  constructor(private httpClient:HttpClient) {
    console.log('im');
    this.activateCategory().subscribe((cat)=>{this.categoryList = cat});
   
   
    // console.log(this.categoryList);
    
    
   }

  url:string = "http://localhost:3000"
  getProducts(){
    return this.httpClient.get(this.url);
  }

// getCategory():string[]{
//   return this.categoryList
// }


  activateCategory(){
   return this.httpClient.get(this.url+"/category")
  }


}
