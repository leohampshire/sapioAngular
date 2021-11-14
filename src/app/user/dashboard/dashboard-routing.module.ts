import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {LoginComponent} from "../home/login/login.component";
import {RegisterComponent} from "../home/register/register.component";
import {DashboardComponent} from "./dashboard.component";
import {CourseComponent} from "./course/course.component";
import {VimeoComponent} from "../../components/vimeo/vimeo.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: CourseComponent,
      },
      {
        path: 'video/upload',
        component: VimeoComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
