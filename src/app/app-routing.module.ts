import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MenuComponent } from './shared/menu/menu.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // -----ROTAS DO RORTAL --------
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}