import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(
    private authService:AuthService,
    private router:Router,
  ) {

  }

  ngOnInit(): void {
  }

  login() {
    const response = this.authService.authentication(this.email, this.password).subscribe(()=>{
        console.log('Autenticado com sucesso');
        this.router.navigate(['dashboard']);
      },
      (error) => {
        alert('Usuário ou password inválido');
        console.log(error)
      });

    // console.log(response);
  }

}
