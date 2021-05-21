import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService){

  }

  ngOnInit() {
    this.productService.getProducts().subscribe(a=> {
      this.products = a;
    })
  }

}
