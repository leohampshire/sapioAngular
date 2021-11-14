import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MessageModule} from "../message/message.module";
import {HeaderModule} from "../includes/header/header.module";
import {ImageComponent} from "./image/image.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    UploadComponent,
    ImageComponent,
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MessageModule,
    HeaderModule,
    HttpClientModule,
  ],
  exports: [
    UploadComponent
  ]
})
export class UploadModule { }
