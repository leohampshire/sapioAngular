import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {UsuarioExisteService} from "./usuario-existe.service";
import {Router} from "@angular/router";
import {minusculoValidator} from "./minusculo.validator";
import {usuarioSenhaIguaisValidator} from "./usuario-senha-iguais.validator";
import {Register} from "./register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private novoUsuarioService:RegisterService,
    private usuarioExisteService:UsuarioExisteService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required, Validators.minLength(4)]],
        // userName: ['', [minusculoValidator], [this.usuarioExisteService.usuarioJaExiste()]],
        password: [''],
        password_confirmation: [''],
      },
      {
        validators: [usuarioSenhaIguaisValidator]
      });
  }

  register() {
    if (this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as Register;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
        () => {
          this.router.navigate(['']) //rota de login
        },
        (error) => {
          console.log(error);
        }
      );
      console.log(novoUsuario);
    }
  }

}
