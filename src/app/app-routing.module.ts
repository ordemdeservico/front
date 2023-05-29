import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeLoginRoutingModule } from '../app/pages/home-login/home-login-routing.module'

const routes: Routes = [
  // -----ROTAS DO RORTAL --------
  { path: '', loadChildren: () => import('./pages/home-login/home-login.module').then(m => m.HomeLoginModule) },



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeLoginRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 


}