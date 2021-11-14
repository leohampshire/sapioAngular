import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanLoad {

  constructor(private userService:UserService, private router:Router) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.userService.isLogIn()){
      this.router.navigate(['home']);
      return false;
    }

    return true;
  }
}
