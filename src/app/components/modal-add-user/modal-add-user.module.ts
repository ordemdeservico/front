import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddUserComponent } from './modal-add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ModalAddUserComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ModalAddUserComponent
  ]
})
export class ModalAddUserModule { }
