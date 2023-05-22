import { Component } from '@angular/core';

@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.scss']
})
export class ListAdmComponent {

  usersInfo = [
    {
      name: 'Aldo',
      mail: 'aldo@gmail.com',	
      role: 'Técnico',
      outsourced: 'Não',
      date: '02/05/2023'
    },
    {
      name: 'Cezar Santos',
      mail: 'cezar@gmail.com',	
      role: 'Técnico',
      outsourced: 'Não',
      date: '02/05/2023'
    },
    {
      name: 'Geovandro',
      mail: 'geovandro@gmail.com',	
      role: 'Técnico',
      outsourced: 'Não',
      date: '02/05/2023'
    },
    {
      name: 'João Eduardo',
      mail: 'joaoeduardo@gmail.com',	
      role: 'Técnico',
      outsourced: 'Não',
      date: '02/05/2023'
    },
    {
      name: 'Otávio',
      mail: 'otavio@gmail.com',	
      role: 'Técnico',
      outsourced: 'Não',
      date: '02/05/2023'
    },
    {
      name: 'Osivado',
      mail: 'osivaldo@gmail.com',	
      role: 'Técnico',
      outsourced: 'Não',
      date: '02/05/2023'
    },
    {
      name: 'João Eduardo',
      mail: 'joaoeduardo@gmail.com',	
      role: 'Técnico',
      outsourced: 'Não',
      date: '02/05/2023'
    }
  ] 
  
}
