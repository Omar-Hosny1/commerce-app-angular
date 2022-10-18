import { EventEmitter, Injectable } from '@angular/core';
import { CartService } from '../cart/Cart.service';
@Injectable()
export class AuthenticationService {
  constructor(private cartService: CartService) {}
  isLoggedIn: boolean = false;
  loggedInUpdated = new EventEmitter<boolean>();

  logIn() {
    this.loggedInUpdated.emit(true);
    this.isLoggedIn = true;
  }
  signOut() {
    this.loggedInUpdated.emit(false);
    this.isLoggedIn = false;
    this.cartService.resetCart();
  }
}
