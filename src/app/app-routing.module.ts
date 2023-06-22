import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLoginRoutingModule } from '../app/pages/home-login/home-login-routing.module'
import { DashboardAdmRoutingModule } from './pages/dashboard-adm/dashboard-adm-routing.module';
import { TokenGuard } from './guards/token.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: 'home-login',
    loadChildren: () =>
      import('./pages/home-login/home-login.module').then(
        (m) => m.HomeLoginModule
      ),
  },
  {
    path: 'dashboard-user',
    canActivate: [TokenGuard],
    loadChildren: () =>
      import('./pages/dashboard-user/dashboard-user.module').then(
        (m) => m.DashboardUserModule
      ),
  },
  {
    path: 'dashboard-tec',
    canActivate: [TokenGuard],
    loadChildren: () =>
      import('./pages/dashboard-tec/dashboard-tec.module').then(
        (m) => m.DashboardTecModule
      ),
  },
  {
    path: 'dashboard-adm',
    canActivate: [TokenGuard],
    loadChildren: () =>
      import('./pages/dashboard-adm/dashboard-adm.module').then(
        (m) => m.DashboardAdmModule
      ),
  },
  {
    path: 'list-adm',
    canActivate: [TokenGuard, AdminGuard],
    loadChildren: () =>
      import('./pages/list-adm/list-adm.module').then((m) => m.ListAdmModule),
  },
  {
    path: 'home-form',
    canActivate: [TokenGuard, AdminGuard],
    loadChildren: () =>
      import('./pages/home-form/home-form.module').then((m) => m.HomeFormModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeLoginRoutingModule,
    DashboardAdmRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 


}