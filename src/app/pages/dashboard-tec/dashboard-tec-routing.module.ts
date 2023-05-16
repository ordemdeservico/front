import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTecComponent } from './dashboard-tec.component';

const routes: Routes = [{ path: '', component: DashboardTecComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTecRoutingModule { }