import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
