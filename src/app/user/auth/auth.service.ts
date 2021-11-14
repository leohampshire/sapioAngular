import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import {tap} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Login} from "../home/login/login";

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient:HttpClient,
    private userService: UserService,
  ) {}

  authentication(user:string, password:string):Observable<HttpResponse<any>>{
    const response = this.httpClient.post(
      `${API}/user/login`,
      {
        // userName: user,
        email: user,
        password: password,
      },
      {observe: 'response'}
      ).pipe(
        tap((res) => {
          // const acessToken = res.headers.get('x-access-token');
          const login = res.body as Login;
          const acessToken = login.accessToken;

          const authToken = acessToken ?? '';
          this.userService.saveToken(authToken);
        })
    );

    return response;
  }
}
