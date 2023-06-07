import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { HomeLoginService } from '../pages/home-login/home-login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router,
    private loginService: HomeLoginService
    ){ }
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthenticated = this.authService.getIsAuthenticated();
      const isVerify = this.loginService.userVerify().subscribe(
        (response: any) => {
          if (response.cargo == 'Admin') {
            console.log('Usuário autenticado, cargo:',response.cargo)
            return true
          } else {
            return false
          }
        },
        (error) => {
          console.error(error);
          return false;
        }
      )

      if (isAuthenticated && isVerify) {
        return true;
      } 

      this.router.navigateByUrl('/home-login');
      return false;

  }
  
}
