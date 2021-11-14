import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MessageModule} from "../../components/message/message.module";
import {HeaderModule} from "../../components/includes/header/header.module";
import { CoursesInProgressComponent } from './courses-in-progress/courses-in-progress.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CoursesInProgressComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    HeaderModule
  ]
})
export class DashboardModule { }
