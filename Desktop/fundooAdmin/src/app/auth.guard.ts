import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router){}
  canActivate(
    path: ActivatedRouteSnapshot,
    state : RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      const token = localStorage.getItem('token');
      if(token){
        return true
      }
      this.router.navigate(['login']);
      return false;
    }
  
}
