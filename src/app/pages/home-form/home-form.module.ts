import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFormRoutingModule } from './home-form-routing.module';
import { HomeFormComponent } from './home-form.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';


@NgModule({
  declarations: [
    HomeFormComponent
  ],
  imports: [
    CommonModule,
    HomeFormRoutingModule,
    MenuModule

  ]
})
export class HomeFormModule { }
