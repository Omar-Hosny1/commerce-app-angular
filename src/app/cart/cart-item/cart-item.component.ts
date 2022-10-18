import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/Cart.service';
import { Product } from 'src/app/shop/products/product-item/product.model';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item: Product;
  faClose = faClose;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onAddOne() {
    this.cartService.addOneToTheQuantity(this.item);
  }

  onRemoveOne() {
    this.cartService.subOnefromTheQuantity(this.item);
  }
  onRemoveItem() {
    this.cartService.removeFromCart(this.item);
  }
  onDeleteItem() {
    this.cartService.deleteItem(this.item);
  }
}
