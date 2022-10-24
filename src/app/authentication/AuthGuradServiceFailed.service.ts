import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './Authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthFailedGuradService implements CanActivate {
  constructor(
    private AuthService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const isAuthenticated = this.AuthService.isLoggedInFunc();
    if (!isAuthenticated) {
      return true;
    }
    this.router.navigate(['']);
    return true;
  }
}
