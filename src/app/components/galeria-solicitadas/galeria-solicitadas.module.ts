import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaSolicitadasComponent } from './galeria-solicitadas.component';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';



@NgModule({
  declarations: [
    GaleriaSolicitadasComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    ButtonModule,
    AccordionModule
  ],
  exports: [
    GaleriaSolicitadasComponent
  ]
})
export class GaleriaSolicitadasModule { }
