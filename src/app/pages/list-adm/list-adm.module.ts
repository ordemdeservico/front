import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAdmRoutingModule } from './list-adm-routing.module';
import { ListAdmComponent } from './list-adm.component';
import { ModalAddUserModule } from 'src/app/components/modal-add-user/modal-add-user.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { TableUserModule } from 'src/app/components/table-user/table-user.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListAdmComponent
  ],
  imports: [
    CommonModule,
    ListAdmRoutingModule,
    MenuModule,
    ModalAddUserModule,
    TableUserModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    ModalAddUserModule
  ]
})
export class ListAdmModule { }
