import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalAddUserComponent } from "src/app/components/modal-os-adm/modal-add-user/modal-add-user.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    ModalAddUserComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ModalAddUserComponent
  ]
})
export class ModalAddUserModule { }
