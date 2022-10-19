import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/cart/Cart.service';
import { ProductsService } from 'src/app/shop/products.service';
import { Product } from '../product-item/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: any;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const activatedProductID = this.route.snapshot.params['id'];
    if (this.productsService.getItem(+activatedProductID) == undefined) {
    } else {
      this.productData = this.productsService.getItem(+activatedProductID);
    }
  }

  onAddToCart() {
    this.cartService.addToCard(this.productData);
  }
}
