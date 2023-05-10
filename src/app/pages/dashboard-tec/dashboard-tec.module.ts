import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardTecRoutingModule } from './dashboard-tec-routing.module';
import { DashboardTecComponent } from './dashboard-tec.component';


@NgModule({
  declarations: [
    DashboardTecComponent
  ],
  imports: [
    CommonModule,
    DashboardTecRoutingModule
  ]
})
export class DashboardTecModule { }
