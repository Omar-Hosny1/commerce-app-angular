import { HttpClient } from '@angular/common/http';

import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartService } from '../cart/Cart.service';
import { User } from './user.model';

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
export class AuthenticationService {
  user = new BehaviorSubject<User | any>(null);

  constructor(private cartService: CartService, private http: HttpClient) {}
  isLoggedIn: boolean = false;
  loggedInUpdated = new EventEmitter<boolean>();

import { environment } from 'src/environments/environment';
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

  ngOnInit() {}

  logIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        environment.apiKey,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        environment.apiKey,
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
