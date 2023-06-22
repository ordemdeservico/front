import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { DashboardUserComponent } from './dashboard-user.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { CardModule } from 'src/app/components/card/card.module';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ListCardsModule } from 'src/app/components/list-cards/list-cards.module';

@NgModule({
  declarations: [
    DashboardUserComponent
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    MenuModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ListCardsModule
  ]
})
export class DashboardUserModule { }
