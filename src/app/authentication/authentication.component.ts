import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}
  login() {
    this.authService.logIn();
  }
}
