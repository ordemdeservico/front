import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, combineLatest, of, switchMap } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { HomeLoginService } from '../pages/home-login/home-login.service';

@Injectable({
  providedIn: 'root'
})
export class TecGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router,
    private loginService: HomeLoginService
    ){ }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return combineLatest([
        of(this.authService.getIsAuthenticated()),
        this.loginService.userVerify()
      ]).pipe(
        switchMap(([isAuthenticated, cargo]) => {
          if (isAuthenticated && cargo === 'Tecnico') {
            console.log('Teste-1')
            return of(true);
          } else {
            this.router.navigateByUrl('/home-login');
            console.log('Teste-2')
            return of(false);
          }
        }),
        catchError((error) => {
          console.error(error);
          this.router.navigateByUrl('/home-login');
          console.log('Teste-3')
          return of(false);
        })
      );
    }
  
}
