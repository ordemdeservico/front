import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLoginRoutingModule } from './home-login-routing.module';
import { HomeLoginComponent } from './home-login.component';


@NgModule({
  declarations: [
    HomeLoginComponent
  ],
  imports: [
    CommonModule,
    HomeLoginRoutingModule
  ]
})
export class HomeLoginModule { }
