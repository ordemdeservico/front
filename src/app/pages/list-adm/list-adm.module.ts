import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAdmRoutingModule } from './list-adm-routing.module';
import { ListAdmComponent } from './list-adm.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { TableUserModule } from 'src/app/components/table-user/table-user.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
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
    UserDetailsModule,
    ModalAddUserModule,
    

    ListAdmRoutingModule,
    MenuModule,
    TableUserModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ListAdmModule { }
