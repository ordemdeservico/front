import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from './list-cards.component';
import { CardModule } from '../card/card.module';
import { GaleriaSolicitadasModule } from '../galeria-solicitadas/galeria-solicitadas.module';





@NgModule({
  declarations: [
    ListCardsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    GaleriaSolicitadasModule

  ],
  exports: [
    ListCardsComponent
  ]
})
export class ListCardsModule { }
