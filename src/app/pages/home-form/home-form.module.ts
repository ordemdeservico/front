import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFormRoutingModule } from './home-form-routing.module';
import { HomeFormComponent } from './home-form.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';



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
    ReactiveFormsModule,
    FileUploadModule,
    ToastModule
  ]
})
export class HomeFormModule { }
