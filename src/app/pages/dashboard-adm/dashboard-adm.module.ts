import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdmRoutingModule } from './dashboard-adm-routing.module';
import { DashboardAdmComponent } from './dashboard-adm.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { CardModule } from 'src/app/components/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCardsModule } from 'src/app/components/list-cards/list-cards.module';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { ModalAprovarOsModule } from 'src/app/components/modal-os-adm/modal-aprovar-os/modal-aprovar-os.module';
import { ModalFinalizarOsModule } from 'src/app/components/modal-os-adm/modal-finalizar-os/modal-finalizar-os.module';


@NgModule({
  declarations: [
    DashboardAdmComponent
  ],
  imports: [
    CommonModule,
    DashboardAdmRoutingModule,
    MenuModule,
    CardModule,
    ReactiveFormsModule,
    ListCardsModule,
    DynamicDialogModule,
    ButtonModule,
    FormsModule,
    MultiSelectModule,
    ModalAprovarOsModule,
    ModalFinalizarOsModule
  ],
  providers: [DynamicDialogRef]
})
export class DashboardAdmModule { }
