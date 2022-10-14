import { Product } from './shop/products/product-item/product.model';
import { EventEmitter } from '@angular/core';
export class CartService {
  cartItemsUpdated = new EventEmitter<Product[]>();
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
      alert('The item is already exist!');
      return;
    }
    this.cartItems.push(item);
    this.addCartInfo(item.price);
    alert('ADDED ✔');
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
          this.removeFromCart(item);
          this.cartInfo.totalItems--;
          this.cartInfo.totalQuantity--;
          this.cartInfo.totalPrice -= item.price;
        } else {
          element.quantity--;
          this.cartInfo.totalQuantity--;
          this.cartInfo.totalPrice -= item.price;
        }
      }
    }
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
}
