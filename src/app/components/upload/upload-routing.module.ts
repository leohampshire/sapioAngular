import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadComponent} from "./upload.component";
import {ImageComponent} from "./image/image.component";

const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
    children: [
      {
        path: '',
        component: ImageComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
