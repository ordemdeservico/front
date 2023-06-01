import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLoginRoutingModule } from './home-login-routing.module';
import { HomeLoginComponent } from './home-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeLoginComponent
  ],
  imports: [
    CommonModule,
    HomeLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class HomeLoginModule { }
