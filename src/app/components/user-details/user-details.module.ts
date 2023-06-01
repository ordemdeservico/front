import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { UserDetailsComponent } from './user-details.component';



@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule
  ],
  exports: [
    UserDetailsComponent
  ]
})
export class UserDetailsModule { }
