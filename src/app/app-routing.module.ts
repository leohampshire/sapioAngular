import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardGuard} from "./user/dashboard/dashboard.guard";
import {HomeGuard} from "./user/home/home.guard";
import {UploadGuard} from "./components/upload/upload.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren:() => import('./user/home/home.module').then((m) => m.HomeModule),
    canLoad: [HomeGuard]
  },
  {
    path:'dashboard',
    loadChildren:() => import('./user/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [DashboardGuard]
  },
  {
    path:'vimeo',
    loadChildren:() => import('./components/vimeo/vimeo.module').then((m) => m.VimeoModule),
    // canLoad: [DashboardGuard]
  },
  {
    path:'upload',
    loadChildren:() => import('./components/upload/upload.module').then((m) => m.UploadModule),
    canLoad: [UploadGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
