import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../user/home/home.component";
import {LoginComponent} from "../../user/home/login/login.component";
import {RegisterComponent} from "../../user/home/register/register.component";
import {VimeoComponent} from "./vimeo.component";
import {VideoUploadComponent} from "./video-upload/video-upload.component";

const routes: Routes = [
  {
    path: '',
    component: VimeoComponent,
    children: [
      {
        path: '',
        component: VideoUploadComponent,
      },
      // {
      //   path: 'register',
      //   component: RegisterComponent,
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VimeoRoutingModule { }
