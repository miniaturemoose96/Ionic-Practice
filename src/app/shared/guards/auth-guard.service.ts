
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router,public dataService: DataService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const authenticated = this.dataService.isLogged;
    console.log(authenticated);
    
    if (authenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
