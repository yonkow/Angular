import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const loginRequired = route.data['loginRequired'];
    if (
      loginRequired === undefined ||
      this.userService.isLogged === !!loginRequired) {return true;}
      
    const returnUrl = route.url.map((u) => u.path).join('/');
    return this.router.createUrlTree(['/auth/login'], {queryParams: { returnUrl }});
  }
}
