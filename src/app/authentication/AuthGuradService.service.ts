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
export class AuthGuradService implements CanActivate {
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
    const isLoggedInFunc = () => {
      const LS = localStorage.getItem('loggedin');
      return LS == null || LS == '0' ? false : true;
    };
    const isAuthenticated = isLoggedInFunc();
    if (isAuthenticated) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
