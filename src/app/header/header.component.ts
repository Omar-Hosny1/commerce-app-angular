import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isAuthenticated: boolean = false;
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
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    // this.authService.loggedInUpdated.subscribe(
    //   (isAuth: boolean) => (this.isAuthenticated = isAuth)
    // );
  }

  signOut() {
    this.authService.signOut();
  }
  logIn() {
    this.authService.logIn();
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
