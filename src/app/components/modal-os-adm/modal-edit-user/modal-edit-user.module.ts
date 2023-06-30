import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModalEditUserComponent } from './modal-edit-user.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    ModalEditUserComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    InputTextareaModule,
    FormsModule, 
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule
  ],
  exports: [
    ModalEditUserComponent
  ]
})
export class ModalEditUserModule { }
