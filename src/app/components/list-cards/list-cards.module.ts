import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from './list-cards.component';
import { CardModule } from '../card/card.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';




@NgModule({
  declarations: [
    ListCardsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    // DynamicDialogModule,
    // DialogModule
  ],
  exports: [
    ListCardsComponent
  ]
})
export class ListCardsModule { }
