import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFormRoutingModule } from './home-form-routing.module';
import { HomeFormComponent } from './home-form.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeFormComponent,
  ],
  imports: [
    CommonModule,
    HomeFormRoutingModule,
    MenuModule,
    DropdownModule,
    InputTextareaModule,
    ReactiveFormsModule
  ]
})
export class HomeFormModule { }
