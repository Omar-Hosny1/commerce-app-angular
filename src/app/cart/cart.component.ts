import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './Cart.service';
import { Product } from '../shop/products/product-item/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @ViewChild('couponForm') form: NgForm;
  cartItems: Product[] = [];
  cartInfo: { totalItems: number; totalQuantity: number; totalPrice: number };
  cartItemsLength = this.cartService.cartItems.length;
  showAlert: boolean;
  showAlertMessage: boolean;
  message: string;
  isAValidCoupon: boolean = false;
  showCongratulationMsg: boolean = false;
  isHasASale: boolean = false;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.showAlert.subscribe((msg) => {
      this.showAlertMessage = true;
      this.message = msg;
    });
    this.cartItems = this.cartService.cartItems;
    this.cartService.cartItemsUpdated.subscribe(
      (items: Product[]) => (this.cartItems = items)
    );
    this.cartInfo = this.cartService.cartInfo;
    this.cartService.showAlertUpdated.subscribe(
      (val) => (this.showAlert = val)
    );
  }

  onGoToShopPage() {
    this.router.navigate(['shop']);
  }

  onCheckOut() {
    this.showCongratulationMsg = true;
    this.cartService.checkOutCart();
  }

  onReset() {
    this.cartService.resetCart();
  }
  onSubmit() {
    if (this.form.value.coupon.toUpperCase() == 'WELCOMEADI') {
      this.showAlertMessage = true;
      this.cartService.showAlert.emit(
        'Congratulation you now have a 15% off 🎉'
      );
      this.isHasASale = true;
    } else {
      this.isAValidCoupon = true;
      setTimeout(() => {
        this.isAValidCoupon = false;
      }, 1000);
    }
    this.form.reset();
  }

  onCloseAlertMessage() {
    this.showAlertMessage = false;
  }
}
