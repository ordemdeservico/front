import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAdmComponent } from './list-adm.component';

const routes: Routes = [{ path: '', component: ListAdmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAdmRoutingModule { }