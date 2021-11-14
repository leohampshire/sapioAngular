import { Injectable } from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {first, map, switchMap} from "rxjs/operators";
import {RegisterService} from "./register.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private registerService:RegisterService) { }

  usuarioJaExiste() {
    return (control:AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.registerService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? {usuarioExistente:true} : null
        ),
        first()
      );
    };
  }
}
