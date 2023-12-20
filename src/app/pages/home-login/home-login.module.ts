import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLoginRoutingModule } from './home-login-routing.module';
import { HomeLoginComponent } from './home-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    HomeLoginComponent
  ],
  imports: [
    CommonModule,
    HomeLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    PasswordModule

  ]
})
export class HomeLoginModule { }
