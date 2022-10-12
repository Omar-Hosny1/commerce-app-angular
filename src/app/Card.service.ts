import { Product } from './shop/products/product-item/product.model';

export class CardService {
  cartItems: Product[] = [];

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
  }

  removeFromCart(id: number): void {
    this.cartItems.filter((ele) => ele.id !== id);
  }

  addOneToTheQuantity(id: number): void {
    const items = this.cartItems;
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (element.id == id) {
        element.quantity++;
      }
    }
  }

  subOnefromTheQuantity(id: number): void {
    const items = this.cartItems;
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (element.id == id) {
        if (element.quantity == 0) {
          this.removeFromCart(id);
        } else {
          element.quantity--;
        }
      }
    }
  }
}
