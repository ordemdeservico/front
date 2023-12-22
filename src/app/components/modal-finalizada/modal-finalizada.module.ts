import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFinalizadaComponent } from './modal-finalizada.component';
import { GaleriaSolicitadasModule } from '../galeria-solicitadas/galeria-solicitadas.module';



@NgModule({
  declarations: [
    ModalFinalizadaComponent
  ],
  imports: [
    CommonModule,
    GaleriaSolicitadasModule
  ],
  exports: [
    ModalFinalizadaComponent
  ]
})
export class ModalFinalizadaModule { }
