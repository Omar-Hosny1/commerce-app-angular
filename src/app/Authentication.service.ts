export class AuthenticationService {
  isLoggedIn: boolean = false;

  logIn() {
    this.isLoggedIn = true;
  }
  logOut() {
    this.isLoggedIn = false;
  }
}
