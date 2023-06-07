import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalOsAdmComponent } from './modal-os-adm.component';


import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@NgModule({

  declarations: [
    ModalOsAdmComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule
  ],
  exports: [
    ModalOsAdmComponent
  ]
})
export class ModalOsAdmModule { }
