import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/Cart.service';
import { Product } from 'src/app/shop/products/product-item/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  // @Input() name: string;
  // @Input() id: number;
  // @Input() price: number;
  // @Input() categoryType: string;
  // @Input() description: string;
  // @Input() imagePath: string;
  // @Input() quantity: number;
  @Input() item: Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onAddOne() {
    this.cartService.addOneToTheQuantity(this.item);
  }

  onRemoveOne() {
    this.cartService.subOnefromTheQuantity(this.item);
  }
  onDeleteItem() {
    this.cartService.removeFromCart(this.item);
  }
}
