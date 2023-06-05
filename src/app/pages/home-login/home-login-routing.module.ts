import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './home-login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLoginComponent,
  },
  {
    path: 'dashboard-tec',
    loadChildren: () =>
      import('../dashboard-tec/dashboard-tec.module').then(
        (m) => m.DashboardTecModule
      ),
      canActivate: []
  },
  {
    path: 'dashboard-adm',
    loadChildren: () =>
      import('../dashboard-adm/dashboard-adm.module').then(
        (m) => m.DashboardAdmModule
      ),
  },
  {
    path: 'dashboard-user',
    loadChildren: () =>
      import('../dashboard-user/dashboard-user.module').then(
        (m) => m.DashboardUserModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLoginRoutingModule {}
