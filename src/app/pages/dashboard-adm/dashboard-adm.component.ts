import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dashboard-adm',
  templateUrl: './dashboard-adm.component.html',
  styleUrls: ['./dashboard-adm.component.scss'],
  // providers: [DialogService, MessageService]
})
export class DashboardAdmComponent {

  // constructor(public dialogService: DialogService ) { }

  toppings = new FormControl('');
  toppingList: string[] = ['Nome', 'E-mail', 'Cargo', 'Terceiro'];
  
  items = [
    {
      id: 1,
      institute: 'Fatec',
      sector: 'C-01 Synapse',
      date: '11/05/2023',
      category: 'Civil'
    },
    {
      id: 2,
      institute: 'Senai',
      sector: 'D-03 Banheiro',
      date: '12/05/2023',
      category: 'Civil'
    },
    {
      id: 3,
      institute: 'Museu',
      sector: 'A-01',
      date: '15/05/2023',
      category: 'Mecanica'
    },
    {
      id: 4,
      institute: 'Fatec',
      sector: 'D-09 Sala',
      date: '15/05/2023',
      category: 'Eletrica'
    },
    {
      id: 5,
      institute: 'Escola',
      sector: 'B-04',
      date: '16/05/2023',
      category: 'Civil'
    },
    {
      id: 6,
      institute: 'Fatec',
      sector: 'B-05',
      date: '11/05/2023',
      category: 'Campo'
    }
  ]
}
