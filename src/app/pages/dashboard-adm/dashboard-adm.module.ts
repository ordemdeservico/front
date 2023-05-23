import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdmRoutingModule } from './dashboard-adm-routing.module';
import { DashboardAdmComponent } from './dashboard-adm.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { CardModule } from 'src/app/components/card/card.module';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardAdmComponent
  ],
  imports: [
    CommonModule,
    DashboardAdmRoutingModule,
    MenuModule,
    CardModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class DashboardAdmModule { }
