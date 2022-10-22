import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CartService } from 'src/app/cart/Cart.service';
import { Product } from 'src/app/shop/products/product-item/product.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  theItemThatWantToDelete: Product;
  constructor(private cartSer: CartService) {}

  ngOnInit(): void {
    this.cartSer.theDeleteRequestItem
      .pipe(take(1))
      .subscribe((ele) => (this.theItemThatWantToDelete = ele));
  }

  onCancel() {
    this.cartSer.showAlertUpdated.emit(false);
  }
  onSure() {
    if (this.theItemThatWantToDelete.quantity > 1) {
      this.cartSer.deleteItem(this.theItemThatWantToDelete);
    } else {
      this.cartSer.removeFromCart(this.theItemThatWantToDelete);
      this.cartSer.removeTheLastItemFromCartInfo(this.theItemThatWantToDelete);
    }
    this.cartSer.showAlertUpdated.emit(false);
  }
}
