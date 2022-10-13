import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { Product } from '../product-item/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const activatedProductID = this.route.snapshot.params['id'];
    this.productData = this.productsService.getItem(+activatedProductID);
  }
}
