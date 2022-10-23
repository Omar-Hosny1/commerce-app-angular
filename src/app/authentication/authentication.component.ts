import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AuthenticationService,
  AuthResponseData,
} from './Authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from '../shop/products.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  loginMode: boolean = false;
  error: string = '';
  isLoading: boolean = false;
  isLoggedIn: boolean = this.isLoggedInFunc();

  constructor(
    private authService: AuthenticationService,
    private productSr: ProductsService,
    private router: Router // private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.authService.isAuth.subscribe(() => {
      this.isLoggedIn = this.isLoggedInFunc();
    });
  }

  isLoggedInFunc(): boolean {
    const LS = localStorage.getItem('loggedin');
    return LS == null || LS == '0' ? false : true;
  }

  onSubmit() {
    const { email, password } = this.form.value;
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    if (this.loginMode) {
      authObs = this.authService.logIn(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe(
      (resData) => {
        this.isLoading = false;
        this.router.navigate(['']);
        localStorage.setItem('loggedin', '1');
        this.authService.isAuth.emit();
      },
      (err) => {
        this.isLoading = false;
        this.error = err.error.error.message;
      }
    );
    this.form.reset();
  }
}
