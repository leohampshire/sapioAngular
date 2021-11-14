import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  setToken(authToken: string) {
    localStorage.setItem(KEY, authToken);
  }

  destroyToken() {
    localStorage.removeItem(KEY);
  }

  existToken() {
    return !! this.getToken();
  }
}
