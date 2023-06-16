import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDeclinarOsComponent } from './modal-declinar-os.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    ModalDeclinarOsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ModalDeclinarOsComponent
  ]
})
export class ModalDeclinarOsModule { }
