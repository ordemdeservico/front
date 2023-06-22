import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './home-login.component';
import { TokenGuard } from '../../guards/token.guard';
import { AdminGuard } from '../../guards/admin.guard';
import { TecGuard } from '../../guards/tec.guard';
import { UserGuard } from '../../guards/user.guard';

const routes: Routes = [
  {
    path: 'home-login',
    component: HomeLoginComponent,
  },
  {
    path: 'dashboard-tec',
    loadChildren: () =>
      import('../dashboard-tec/dashboard-tec.module').then(
        (m) => m.DashboardTecModule
      ),
      canActivate: [TokenGuard, TecGuard]
  },
  {
    path: 'dashboard-adm',
    loadChildren: () =>
      import('../dashboard-adm/dashboard-adm.module').then(
        (m) => m.DashboardAdmModule
      ),
      canActivate: [TokenGuard, AdminGuard],
  },
  {
    path: 'dashboard-user',
    loadChildren: () =>
      import('../dashboard-user/dashboard-user.module').then(
        (m) => m.DashboardUserModule
      ),
      canActivate: [TokenGuard, UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLoginRoutingModule {}
