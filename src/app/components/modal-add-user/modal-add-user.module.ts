import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddUserComponent } from './modal-add-user.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    ModalAddUserComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ModalAddUserComponent
  ]
})
export class ModalAddUserModule { }
