import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalOsAdmComponent } from './modal-os-adm.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ModalOsAdmComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ModalOsAdmComponent
  ]
})
export class ModalOsAdmModule { }
