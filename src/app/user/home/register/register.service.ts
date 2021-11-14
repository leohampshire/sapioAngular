import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Register} from "./register";

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  cadastraNovoUsuario(register:Register) {
    return this.http.post(`${API}/auth/register`, register);
  }

  verificaUsuarioExistente(userName: string){
    return this.http.get(`${API}/user/exists/${userName}`)
  }

}
