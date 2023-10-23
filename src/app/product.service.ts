import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import product from "./product";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
uri="http://localhost:3000";
constructor(private http: HttpClient) { }

  addProduct(name :string, price :number, quantity :number) {
    const obj = {
      name: name,
      price: price,
      quantity: quantity
    };
    console.log(obj);
   return  this.http.post(`${this.uri}`, obj).subscribe(res => console.log('Done'));
  }

  getProduct() :Observable<product[]> {    
    return this.http.get<product[]>(`${this.uri}`);
  }

  editProduct(id :any) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }

    updateProduct(id :any,name :string, price :number, quantity :number) {

      const obj = {
          
          name: name,
          price: price,
          quantity: quantity
        };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteProduct(id :any) {
      return this
                .http
                .delete(`${this.uri}/${id}`);
    }
}
