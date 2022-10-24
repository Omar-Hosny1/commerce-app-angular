import { Product } from '../shop/products/product-item/product.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { AuthenticationService } from '../authentication/Authentication.service';
@Injectable({ providedIn: 'root' })
export class CartService {
  constructor() {}
  showAlert = new EventEmitter<string>();
  cartItemsUpdated = new EventEmitter<Product[]>();
  showAlertUpdated = new EventEmitter<boolean>();
  theDeleteRequestItem = new BehaviorSubject<any>(null);
  cartItems: Product[] = [];
  cartInfo: { totalItems: number; totalQuantity: number; totalPrice: number } =
    {
      totalItems: 0,
      totalQuantity: 0,
      totalPrice: 0,
    };

  addCartInfo(price: number) {
    this.cartInfo.totalItems++;
    this.cartInfo.totalPrice += price;
    this.cartInfo.totalQuantity++;
  }

  subCartInfo(price: number) {
    this.cartInfo.totalItems--;
    this.cartInfo.totalPrice -= price;
  }

  addToCartInfoInsideCart(price: number) {
    this.cartInfo.totalPrice += price;
    this.cartInfo.totalQuantity++;
  }

  isExist(id: number): boolean {
    let cartItems = this.cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      const element = cartItems[i];
      if (element.id == id) return true;
    }
    return false;
  }

  addToCard(item: Product): void {
    if (this.isExist(item.id)) {
      this.addOneToTheQuantity(item);
      return;
    }
    this.cartItems.push(item);
    this.addCartInfo(item.price);
    this.showAlert.emit('ADDED ✔');
  }

  deleteItemRequest(item: Product) {
    this.showAlertUpdated.emit(true);
    this.theDeleteRequestItem.next(item);
  }

  deleteItem(item: Product) {
    this.cartInfo.totalItems--;
    this.cartInfo.totalQuantity -= item.quantity;
    this.cartInfo.totalPrice -= item.quantity * item.price;
    this.cartItems = this.cartItems.filter((ele) => ele.id !== item.id);
    this.cartItemsUpdated.emit(this.cartItems);
  }

  removeFromCart(item: Product): void {
    this.cartItems = this.cartItems.filter((ele) => ele.id !== item.id);
    this.cartItemsUpdated.emit(this.cartItems);
  }

  addOneToTheQuantity(item: Product): void {
    const items = this.cartItems;
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (element.id == item.id) {
        element.quantity++;
      }
    }
    this.addToCartInfoInsideCart(item.price);
  }

  subOnefromTheQuantity(item: Product): void {
    const items = this.cartItems;
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (element.id == item.id) {
        if (element.quantity == 1) {
          this.showAlertUpdated.emit(true);
          this.theDeleteRequestItem.next(item);
        } else {
          element.quantity--;
          this.cartInfo.totalQuantity--;
          this.cartInfo.totalPrice -= item.price;
        }
      }
    }
  }

  removeTheLastItemFromCartInfo(item: Product) {
    this.cartInfo.totalItems--;
    this.cartInfo.totalQuantity--;
    this.cartInfo.totalPrice -= item.price;
  }

  resetCart() {
    this.cartInfo.totalItems = 0;
    this.cartInfo.totalPrice = 0;
    this.cartInfo.totalQuantity = 0;
    this.cartItems = [];
    this.cartItemsUpdated.emit(this.cartItems);
  }
  checkOutCart() {
    this.resetCart();
    alert('Thank you for your order ❤');
  }

  onAddCoupon() {
    const totalPrice = this.cartInfo.totalPrice;
    const theSubstractedVal = totalPrice * 0.15;
    this.cartInfo.totalPrice = totalPrice - theSubstractedVal;
  }
}
