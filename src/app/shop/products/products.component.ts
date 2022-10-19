import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shop/products.service';
import { Product } from './product-item/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  filteredProducts = '';
  data: Product[] | undefined = [];
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let queryParams = this.activatedRoute.snapshot.queryParams;
    this.productsService.paramsEmitter.next(queryParams['ARs']);
    this.data = this.productsService.getData();
  }
}
