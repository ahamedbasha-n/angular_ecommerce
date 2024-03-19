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

  toaster = inject(ToastrService);
  productObj = {
    "productName": "",
    "quantity": 0,
    "isActive": true
  };

  categoryList: any[] = [];

  constructor(private productSrv: ProductService, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.productSrv.getAllProducts().subscribe((res: any) => { this.categoryList = res });
  }

  addproduct(): void {
    this.productSrv.addProduct(this.productObj).subscribe((res: any) => { { this.toastr.success('Product Added Successfully', 'Success') } });
  }


  orderProduct(product: any): void {
    let makeProductObject = {
      customerId: "d2d5cc60-349e-4759-9bf0-c2804f05ac55",
      productId: product.ProductId,
      quantity: product.Quantity
    }
    console.log(makeProductObject);
    this.productSrv.orderProduct(makeProductObject).subscribe((res: any) => { this.toastr.success('Ordered Successfully', 'Success') });
  }

}

