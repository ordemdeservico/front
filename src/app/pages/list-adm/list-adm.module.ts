import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAdmRoutingModule } from './list-adm-routing.module';
import { ListAdmComponent } from './list-adm.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { UserDetailsModule } from 'src/app/components/user-details/user-details.module';
import { ModalAddUserModule } from 'src/app/components/modal-add-user/modal-add-user.module';





@NgModule({
  declarations: [
    ListAdmComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    DialogModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ModalAddUserModule,
    ListAdmRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ListAdmComponent
  ]
})
export class ListAdmModule { }
