import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-form', loadChildren: () => import('../home-form/home-form.module').then(m => m.HomeFormModule) },
  { path: 'home-login', loadChildren: () => import('../home-login/home-login.module').then(m => m.HomeLoginModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
