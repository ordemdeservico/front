import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardTecRoutingModule } from './dashboard-tec-routing.module';
import { DashboardTecComponent } from './dashboard-tec.component';
import { ModalOsTecModule } from 'src/app/components/modal-os-tec/modal-os-tec.module';


@NgModule({
  declarations: [
    DashboardTecComponent
  ],
  imports: [
    CommonModule,
    DashboardTecRoutingModule,
    ModalOsTecModule
  ]
})
export class DashboardTecModule { }
