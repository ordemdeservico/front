import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdmComponent } from './dashboard-adm.component';

const routes: Routes = [
  { path: '', component: DashboardAdmComponent }, 
  { path: 'list-adm', loadChildren: () => import('../list-adm/list-adm.module').then(m => m.ListAdmModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdmRoutingModule { }