import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/Authentication.service';
import {
  faBars,
  faClose,
  faUser,
  faArrowAltCircleRight,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated?: boolean = false;
  faBars = faBars;
  faClose = faClose;
  faUser = faUser;
  faHeart = faHeart;
  faArrowAltCircleRight = faArrowAltCircleRight;

  showMenu: boolean = false;
  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.loggedInUpdated.subscribe(
      (isAuth: boolean) => (this.isAuthenticated = isAuth)
    );
  }

  signOut() {
    this.authService.signOut();
  }
  logIn() {
    this.authService.logIn();
    // console.log(this.route.toString());
  }
  goToCategories() {
    this.router.navigate(['']);
    setTimeout(() => {
      window.scrollTo(0, 500);
    }, 200);
  }
}
