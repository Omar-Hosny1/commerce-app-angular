import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/Cart.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  constructor(private cartSer: CartService) {}

  ngOnInit(): void {}

  onCancel() {
    this.cartSer.showAlertUpdated.emit(false);
  }
}
