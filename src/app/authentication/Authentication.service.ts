import { HttpClient } from '@angular/common/http';

import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CartService } from '../cart/Cart.service';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService implements OnInit {
  constructor(private cartService: CartService, private http: HttpClient) {}
  isAuth = new EventEmitter<any>();

  logInState() {
    localStorage.setItem('loggedin', '1');
    this.isAuth.emit();
  }
  logOutState() {
    localStorage.setItem('loggedin', '0');
    this.isAuth.emit();
  }

  isLoggedInFunc(): boolean {
    const LS = localStorage.getItem('loggedin');
    return LS == null || LS == '0' ? false : true;
  }

  ngOnInit() {}

  logIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      environment.signInURL + environment.apiKey,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      environment.signUpURL + environment.apiKey,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  signOut() {
    localStorage.setItem('loggedin', '0');
    this.isAuth.emit();
    this.cartService.resetCart();
  }
}
