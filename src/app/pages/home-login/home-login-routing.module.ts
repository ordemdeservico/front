import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './home-login.component';
import { TokenGuard } from '../../guards/token.guard';
import { AdminGuard } from '../../guards/admin.guard';
import { TecGuard } from '../../guards/tec.guard';
import { UserGuard } from '../../guards/user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLoginRoutingModule {}
