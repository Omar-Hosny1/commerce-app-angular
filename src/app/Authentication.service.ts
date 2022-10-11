import { EventEmitter } from '@angular/core';
export class AuthenticationService {
  isLoggedIn: boolean = false;
  loggedInUpdated = new EventEmitter<boolean>();

  logIn() {
    this.loggedInUpdated.emit(true);
    this.isLoggedIn = true;
  }
  signOut() {
    this.loggedInUpdated.emit(false);
    this.isLoggedIn = false;
  }
}
