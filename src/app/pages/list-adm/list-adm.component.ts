import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddUserComponent } from 'src/app/components/modal-add-user/modal-add-user.component';

@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.scss']
})
export class ListAdmComponent {


  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(ModalAddUserComponent, {panelClass: 'modal-border'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toppings = new FormControl('');
  toppingList: string[] = ['Nome', 'E-mail', 'Cargo', 'Terceiro'];

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
