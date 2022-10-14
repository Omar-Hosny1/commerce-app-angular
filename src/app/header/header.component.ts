import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../Authentication.service';
import {
  faBars,
  faClose,
  faUser,
  faArrowAltCircleRight,
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
  faArrowAltCircleRight = faArrowAltCircleRight;

  showMenu: boolean = false;
  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute
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
}
