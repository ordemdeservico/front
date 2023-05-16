import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdmRoutingModule } from './dashboard-adm-routing.module';
import { DashboardAdmComponent } from './dashboard-adm.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { CardModule } from 'src/app/components/card/card.module';


@NgModule({
  declarations: [
    DashboardAdmComponent
  ],
  imports: [
    CommonModule,
    DashboardAdmRoutingModule,
    MenuModule,
    CardModule
  ]
})
export class DashboardAdmModule { }
