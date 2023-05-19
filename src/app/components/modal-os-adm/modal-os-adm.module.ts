import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalOsAdmComponent } from './modal-os-adm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ModalOsAdmComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    ModalOsAdmComponent
  ]
})
export class ModalOsAdmModule { }
