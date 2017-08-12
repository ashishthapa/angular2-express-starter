import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.router';
import { SharedModule } from '../shared/shared.module';
import {DisplayModule} from "../display/display.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DisplayModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    DashboardComponent
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule {}
