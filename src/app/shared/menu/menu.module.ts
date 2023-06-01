import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { MenuService } from '../menu.service';

import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
    
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
