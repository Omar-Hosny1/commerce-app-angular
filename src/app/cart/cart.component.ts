import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './Cart.service';
import { Product } from '../shop/products/product-item/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  cartInfo: { totalItems: number; totalQuantity: number; totalPrice: number };
  cartItemsLength = this.cartService.cartItems.length;
  showAlert: boolean;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.cartService.cartItemsUpdated.subscribe(
      (items: Product[]) => (this.cartItems = items)
    );
    this.cartInfo = this.cartService.cartInfo;
    this.showAlert = this.cartService.showAlert;
    this.cartService.showAlertUpdated.subscribe(
      (val) => (this.showAlert = val)
    );
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
