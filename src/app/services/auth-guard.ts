import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authState$.pipe(map(state => {
      if (state !== null) {
        return true;
      }
      this.router.navigate(['/logowanie']);
      return false;
    }
    )
    )
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const currentUser = this.authService.currentUserValue;
  //   if (currentUser) {
  //     if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
  //       this.router.navigate(['/lista-wycieczek']);
  //       return false;
  //     }
  //     return true
  //   }
  //   this.router.navigate(['/logowanie'], {
  //     queryParams: {
  //       returnUrl: state.url
  //     }
  //   })
  // }

}
