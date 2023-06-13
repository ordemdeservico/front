import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from './list-cards.component';
import { CardModule } from '../card/card.module';





@NgModule({
  declarations: [
    ListCardsComponent
  ],
  imports: [
    CommonModule,
    CardModule,

  ],
  exports: [
    ListCardsComponent
  ]
})
export class ListCardsModule { }
