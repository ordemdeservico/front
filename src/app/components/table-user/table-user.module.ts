import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUserComponent } from './table-user.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    TableUserComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [
    TableUserComponent
  ]
})
export class TableUserModule { }
