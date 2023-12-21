import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaSolicitadasComponent } from './galeria-solicitadas.component';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    GaleriaSolicitadasComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    ButtonModule
  ],
  exports: [
    GaleriaSolicitadasComponent
  ]
})
export class GaleriaSolicitadasModule { }
