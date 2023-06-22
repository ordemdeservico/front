import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardTecRoutingModule } from './dashboard-tec-routing.module';
import { DashboardTecComponent } from './dashboard-tec.component';
import { ModalOsTecModule } from 'src/app/components/modal-os-tec/modal-os-tec.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { ListCardsModule } from 'src/app/components/list-cards/list-cards.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DashboardTecComponent
  ],
  imports: [
    CommonModule,
    DashboardTecRoutingModule,
    ModalOsTecModule,
    MenuModule,
    ListCardsModule,
    ButtonModule

  ]
})
export class DashboardTecModule { }
