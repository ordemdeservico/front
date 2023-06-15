import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalOsAdmComponent } from './modal-os-adm.component';


import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    ModalOsAdmComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    FormsModule
  ],
  exports: [
    ModalOsAdmComponent
  ]
})
export class ModalOsAdmModule { }
