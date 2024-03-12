import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productObj ={
    "productName": "",
    "quantity": 0,
    "isActive": true
  };

  categoryList:any[]=[];

  constructor(private productSrv:ProductService, private toastr:ToastrService){
  }
  ngOnInit(): void {
      this.productSrv.getAllProducts().subscribe((res:any) => {this.categoryList = res});
  }

  addproduct():void {
    this.productSrv.addProduct(this.productObj).subscribe((res:any)=> {console.log(res)});
  }

  toaster=inject(ToastrService);
  showsuccess(){
    this.toastr.success('Ordered Successfully','Success');
  }
}

