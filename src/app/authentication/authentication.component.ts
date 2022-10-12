import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  login() {
    this.authService.logIn();
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
