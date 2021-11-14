import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {MessageModule} from "../../components/message/message.module";
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import {HeaderModule} from "../../components/includes/header/header.module";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    MessageModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

