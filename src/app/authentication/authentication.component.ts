import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AuthenticationService,
  AuthResponseData,
} from './Authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  @ViewChild('form') from: NgForm;
  logInMode: boolean;
  isLoading: boolean = false;
  error = null;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.isLoggedIn = this.authService.isLoggedIn;
    // this.authService.loggedInUpdated.subscribe(
    //   (isLoggedIn) => (this.isLoggedIn = isLoggedIn)
    // );
  }

  onSubmit() {
    if (!this.from.valid) {
      return;
    }
    this.isLoading = true;
    const { email, password } = this.from.value;

    let authObs!: Observable<AuthResponseData>;

    if (this.logInMode) {
      authObs = this.authService.signIn(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe(
      (resData) => {
        this.isLoading = false;
        console.log(resData);
        this.router.navigate(['']);
      },
      (err) => {
        this.isLoading = false;
        this.error = err.error.error.message;
        console.log(err);
      }
    );
    this.from.reset();
  }
}
