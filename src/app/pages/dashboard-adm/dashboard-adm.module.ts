import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdmRoutingModule } from './dashboard-adm-routing.module';
import { DashboardAdmComponent } from './dashboard-adm.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { CardModule } from 'src/app/components/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCardsModule } from 'src/app/components/list-cards/list-cards.module';
import { ModalOsAdmModule } from 'src/app/components/modal-os-adm/modal-os-adm.module';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';


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
    ModalOsAdmModule,
    DynamicDialogModule,
    ButtonModule,
    FormsModule,
    MultiSelectModule
  ],
  providers: [DynamicDialogRef]
})
export class DashboardAdmModule { }
