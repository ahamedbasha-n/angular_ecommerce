import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  orderProducts(productObj: { productName: string; quantity: number; isActive: boolean; }) {
    throw new Error('Method not implemented.');
  }
  getAllCategory() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(Constant.API_END_POINT + Constant.API_END_POINT_PROD);
  }

  addProduct(product){
    return this.http.post(Constant.API_END_POINT + Constant.ADD_PROD, product);
  }

  orderProduct(product){
    return this.http.post(Constant.API_END_POINT + Constant.ORDER_PROD, product);
  }

}
