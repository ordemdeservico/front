import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConcluirOsComponent } from './modal-concluir-os.component';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    ModalConcluirOsComponent
  ],
  imports: [
    CommonModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    ModalConcluirOsComponent
  ]
})
export class ModalConcluirOsModule { }
