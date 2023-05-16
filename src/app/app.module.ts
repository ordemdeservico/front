import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './shared/menu/menu.module';
import { ModalOsTecComponent } from './components/modal-os-tec/modal-os-tec.component';
import { ModalOsAdmComponent } from './components/modal-os-adm/modal-os-adm.component';




@NgModule({
  declarations: [
    AppComponent,
    ModalOsTecComponent,
    ModalOsAdmComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
