import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMenuModule } from '../components/button-menu/button-menu.module';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ButtonMenuModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
