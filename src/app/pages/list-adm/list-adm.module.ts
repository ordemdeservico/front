import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAdmRoutingModule } from './list-adm-routing.module';
import { ListAdmComponent } from './list-adm.component';
import { ModalAddUserModule } from 'src/app/components/modal-add-user/modal-add-user.module';
import { ModalOsAdmModule } from 'src/app/components/modal-os-adm/modal-os-adm.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { TableUserModule } from 'src/app/components/table-user/table-user.module';



@NgModule({
  declarations: [
    ListAdmComponent
  ],
  imports: [
    CommonModule,
    ListAdmRoutingModule,
    MenuModule,
    ModalAddUserModule,
    ModalOsAdmModule,
    TableUserModule
  ]
})
export class ListAdmModule { }
