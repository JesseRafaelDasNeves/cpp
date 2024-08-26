import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private readonly service: ProductService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.service.list().subscribe((productsApi) => {
      this.products = productsApi;
    }); 
  }

}
