import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MenuComponent } from './menu/menu.component';
import { FormUserComponent } from './form-user/form-user.component';

const routes: Routes = [
  // -----ROTAS DO RORTAL --------
  { path: '', component: MenuComponent },
  { path: 'form-user', component: FormUserComponent },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}