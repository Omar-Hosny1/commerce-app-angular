import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Cart.service';
import { Product } from '../shop/products/product-item/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  cartInfo: { totalItems: number; totalQuantity: number; totalPrice: number };
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.cartService.cartItemsUpdated.subscribe(
      (items: Product[]) => (this.cartItems = items)
    );
    this.cartInfo = this.cartService.cartInfo;
  }
  onGoToShopPage() {
    this.router.navigate(['shop']);
  }
  onCheckOut() {
    this.cartService.checkOutCart();
  }
  onReset() {
    this.cartService.resetCart();
  }
}
