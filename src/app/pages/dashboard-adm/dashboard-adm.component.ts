import { Component } from "@angular/core";
import { HomeLoginService } from '../home-login/home-login.service';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { ListCardsService } from 'src/app/components/list-cards/list-cards.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-dashboard-adm',
  templateUrl: './dashboard-adm.component.html',
  styleUrls: ['./dashboard-adm.component.scss']
})
export class DashboardAdmComponent {

  groupedFilters: any[];
  selectedFilter: any;
  orderServices: OrderService[] = [];
  
  constructor(
    public loginService: HomeLoginService,
    public cardsService: ListCardsService,
    private router: Router
  ) { 
    this.groupedFilters = [
      {
        label: 'Instituição',
        value: 'setor_principal_id',
        items: [
          { label: 'FSNT Geral', data: { value: 'FSNT', filter: 'setor_principal_id' } },
          { label: 'Fatec', data: { value: 'FATEC', filter: 'setor_principal_id' } },
          { label: 'Senai', data: { value: 'SENAI', filter: 'setor_principal_id' } },
          { label: 'CSN', data: { value: 'CSN', filter: 'setor_principal_id' } }
        ]
      },
      {
        label: 'Status',
        value: 'status_os',
        items: [
          { label: 'Solicitada', data: { value: 'Solicitada', filter: 'status_os' } },
          { label: 'Aprovada', data: { value: 'Aprovada', filter: 'status_os' } },
          { label: 'Concluida', data: { value: 'Concluida', filter: 'status_os' } },
          { label: 'Finalizada', data: { value: 'Finalizada', filter: 'status_os' } }
        ]
      },
      {
        label: 'Prioridade',
        value: 'nivel_prioridade',
        items: [
          { label: 'P1 - 1 Dia', data: { value: 'P1 - 1 dia', filter: 'nivel_prioridade' } },
          { label: 'P2 - 2 Dias', data: { value: 'P2 - 2 dias', filter: 'nivel_prioridade' } },
          { label: 'P3 - 4 Dias', data: { value: 'P3 - 4 dias', filter: 'nivel_prioridade' } },
          { label: 'P4 - 7 Dias', data: { value: 'P4 - 7 dias', filter: 'nivel_prioridade' } },
          { label: 'P5 - 10 Dias', data: { value: 'P5 - 10 dias', filter: 'nivel_prioridade' } },
          { label: 'P6 - 15 Dias', data: { value: 'P6 - 15 dias', filter: 'nivel_prioridade' } },
          { label: 'P7 - 25 Dias', data: { value: 'P7 - 25 dias', filter: 'nivel_prioridade' } },
        ]
      }
    ];
    
  }

  navigateToForm(){
    this.router.navigate(['/home-form'])
  }

}
