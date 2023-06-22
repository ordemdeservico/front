import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CardComponent from './card.component';

import { DialogModule } from 'primeng/dialog';
import { ModalAprovarOsModule } from '../modal-os-adm/modal-aprovar-os/modal-aprovar-os.module';
import { ModalFinalizarOsModule } from "../modal-os-adm/modal-finalizar-os/modal-finalizar-os.module";
import { ModalConcluirOsModule } from '../modal-os-adm/modal-concluir-os/modal-concluir-os.module';


@NgModule({
    declarations: [
      CardComponent
    ],
    imports: [
      CommonModule,
      DialogModule,
      ModalAprovarOsModule,
      ModalFinalizarOsModule,
      ModalConcluirOsModule,
  
    ],
    exports: [
      CardComponent
    ]
  })
export class CardModule { }
