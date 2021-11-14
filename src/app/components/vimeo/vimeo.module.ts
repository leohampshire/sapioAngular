import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VimeoRoutingModule } from './vimeo-routing.module';
import {VimeoComponent} from "./vimeo.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VideoUploadComponent } from './video-upload/video-upload.component';
import {HomeRoutingModule} from "../../user/home/home-routing.module";
import {RouterModule} from "@angular/router";
import {MessageModule} from "../message/message.module";
import {HeaderModule} from "../includes/header/header.module";


@NgModule({
  declarations: [
    VimeoComponent,
    VideoUploadComponent
  ],
  imports: [
    CommonModule,
    VimeoRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MessageModule,
    HeaderModule
  ],
  exports: [
    VimeoComponent
  ]
})
export class VimeoModule { }
