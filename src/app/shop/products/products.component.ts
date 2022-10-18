import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shop/products.service';
import { Product } from './product-item/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  filteredProducts = '';
  data: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.data = this.productsService.getAllData();
  }
}
