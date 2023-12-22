import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFinalizarOsComponent } from './modal-finalizar-os.component';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { GaleriaSolicitadasModule } from '../../galeria-solicitadas/galeria-solicitadas.module';



@NgModule({
  declarations: [
    ModalFinalizarOsComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    GaleriaSolicitadasModule
  ],
  exports: [
    ModalFinalizarOsComponent
  ]
})
export class ModalFinalizarOsModule { }
