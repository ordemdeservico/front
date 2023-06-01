import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { ModalOsAdmModule } from '../modal-os-adm/modal-os-adm.module';
import { DialogModule } from '@angular/cdk/dialog';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ModalOsAdmModule,
    DialogModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
