import { Product } from '../shop/products/product-item/product.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CartService {
  cartItemsUpdated = new EventEmitter<Product[]>();
  showAlertUpdated = new EventEmitter<boolean>();
  theDeleteRequestItem = new BehaviorSubject<any>(null);
  cartItems: Product[] = [
    // new Product(
    //   'ULTRA BOOST 22',
    //   Math.random(),
    //   54.75,
    //   'shoes',
    //   "The adidas by Stella McCartney Ultraboost 20 Shoe might boast a retro style, but they're actually a high-performance update on our most famous running silhouette. In great news for feet everywhere, they were designed and tested to be comfortably worn on your next 10km run.",
    //   '../assets/images/product8.jpg',
    //   1
    // ),
    // new Product(
    //   'ULTRA BOOST 22',
    //   Math.random(),
    //   54.75,
    //   'shoes',
    //   "The adidas by Stella McCartney Ultraboost 20 Shoe might boast a retro style, but they're actually a high-performance update on our most famous running silhouette. In great news for feet everywhere, they were designed and tested to be comfortably worn on your next 10km run.",
    //   '../assets/images/product8.jpg',
    //   1
    // ),
    // new Product(
    //   'ULTRA BOOST 22',
    //   Math.random(),
    //   54.75,
    //   'shoes',
    //   "The adidas by Stella McCartney Ultraboost 20 Shoe might boast a retro style, but they're actually a high-performance update on our most famous running silhouette. In great news for feet everywhere, they were designed and tested to be comfortably worn on your next 10km run.",
    //   '../assets/images/product8.jpg',
    //   1
    // ),
  ];
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
}
