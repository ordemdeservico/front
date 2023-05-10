import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAdmRoutingModule } from './list-adm-routing.module';
import { ListAdmComponent } from './list-adm.component';


@NgModule({
  declarations: [
    ListAdmComponent
  ],
  imports: [
    CommonModule,
    ListAdmRoutingModule
  ]
})
export class ListAdmModule { }
