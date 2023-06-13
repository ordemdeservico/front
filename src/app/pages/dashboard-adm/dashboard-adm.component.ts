import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { HomeLoginService } from '../home-login/home-login.service';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { ListCardsService } from 'src/app/components/list-cards/list-cards.service';
import { FilterOs } from "src/app/pages/dashboard-adm/dashboard-adm";


@Component({
  selector: 'app-dashboard-adm',
  templateUrl: './dashboard-adm.component.html',
  styleUrls: ['./dashboard-adm.component.scss']
})
export class DashboardAdmComponent implements OnInit {

  groupedFilters: any[];
  selectedFilter!: FilterOs;
  orderServices: OrderService[] = [];
  status: any;
  
  constructor(
    public loginService: HomeLoginService,
    public cardsService: ListCardsService
  ) { 
    this.groupedFilters = [
      {
        label: 'Instituição',
        value: 'setor_principal_id',
        items: [
          { label: 'FSNT Geral', value: 'FSNT', filter: 'setor_principal_id' },
          { label: 'Fatec', value: 'FATEC', filter: 'setor_principal_id' },
          { label: 'Senai', value: 'SENAI', filter: 'setor_principal_id' },
          { label: 'CSN', value: 'CSN', filter: 'setor_principal_id' }
        ]
      },
      {
        label: 'Status',
        value: 'status_os',
        items: [
          { label: 'Solicitada', value: 'Solicitada', filter: 'status_os' },
          { label: 'Aprovada', value: 'Aprovada', filter: 'status_os' },
          { label: 'Concluída', value: 'Concluida', filter: 'status_os' },
          { label: 'Finalizada', value: 'Finalizada', filter: 'status_os' }
        ]
      },
      {
        label: 'Prioridade',
        value: 'nivel_prioridade',
        items: [
          { label: 'P1 - 1 Dia', value: 'P1 - 1 dia', filter: 'nivel_prioridade' },
          { label: 'P2 - 2 Dias', value: 'P2 - 2 dias', filter: 'nivel_prioridade' },
          { label: 'P3 - 4 Dias', value: 'P4 - 3 dias', filter: 'nivel_prioridade' },
          { label: 'P4 - 7 Dias', value: 'P4 - 7 dias', filter: 'nivel_prioridade' },
          { label: 'P5 - 10 Dias', value: 'P5 - 10 dias', filter: 'nivel_prioridade' },
          { label: 'P6 - 15 Dias', value: 'P6 - 15 dias', filter: 'nivel_prioridade' },
          { label: 'P7 - 25 Dias', value: 'P7 - 25 dias', filter: 'nivel_prioridade' },
        ]
      }
    ];
    
  }


  updateOrderServices(orderServices: OrderService[]) {
    this.orderServices = orderServices;
  }


  ngOnInit() {

}


}
