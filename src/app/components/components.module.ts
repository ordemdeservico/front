import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ComponentsModule
  ],
  imports: [
    CommonModule,
    CardComponent
  ],
  exports: [
    ComponentsModule
  ]
})
export class ComponentsModule { }
