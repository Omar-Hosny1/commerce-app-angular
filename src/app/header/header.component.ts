import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/Authentication.service';
import {
  faBars,
  faClose,
  faUser,
  faArrowAltCircleRight,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  showMenu: boolean = false;
  isAuthenticated: boolean;
  faBars = faBars;
  faClose = faClose;
  faUser = faUser;
  faHeart = faHeart;
  faArrowAltCircleRight = faArrowAltCircleRight;
  private userSub: Subscription;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedInFunc();
    this.authService.isAuth.subscribe(() => {
      this.isAuthenticated = this.authService.isLoggedInFunc();
    });
  }

  // isLoggedInFunc(): boolean {
  //   const LS = localStorage.getItem('loggedin');
  //   return LS == null || LS == '0' ? false : true;
  // }

  signOut() {
    this.authService.signOut();
  }

  goToCategories() {
    this.router.navigate(['']);
    setTimeout(() => {
      window.scrollTo(0, 500);
    }, 200);
  }

  closeMenu() {
    this.showMenu = false;
  }
  openMenu() {
    this.showMenu = true;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
