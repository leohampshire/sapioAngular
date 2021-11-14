import { Injectable } from '@angular/core';
import {TokenService} from "./auth/token/token.service";
import jwtDecode from "jwt-decode";
import {User} from "./user";
import {BehaviorSubject} from "rxjs";
import {environment} from "../../environments/environment";

const passJWT = environment.JWTPassword

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService:TokenService) {
    if (this.tokenService.existToken()){
      this.decodeJWT();
    }
  }

  private decodeJWT(){
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as User;

    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  saveToken(authToken: string) {
    this.tokenService.setToken(authToken);
    // alert(authToken);
    this.decodeJWT();
  }

  logOut(){
    this.tokenService.destroyToken();
    this.userSubject.next({});
  }

  isLogIn(){
    return this.tokenService.existToken();
  }


}
