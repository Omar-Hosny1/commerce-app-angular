import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}
  isAuthenticated?: boolean = false;
  ngOnInit(): void {}

  signOut() {
    this.authService.signOut();
    this.authService.loggedInUpdated.subscribe(
      (isAuth: boolean) => (this.isAuthenticated = isAuth)
    );
  }
  logIn() {
    this.authService.logIn();
    this.authService.loggedInUpdated.subscribe(
      (isAuth: boolean) => (this.isAuthenticated = isAuth)
    );
  }
}
