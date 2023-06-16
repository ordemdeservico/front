import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/components/card/card.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    MenuModule
  ]
})
export class HomeModule { }
