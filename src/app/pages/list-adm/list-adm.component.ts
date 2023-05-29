import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddUserComponent } from 'src/app/components/modal-add-user/modal-add-user.component';

@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.scss']
})
export class ListAdmComponent implements OnInit {

  usersInfo: any[] = [];

  constructor(
    // private http: HttpClient,
    public dialog: MatDialog
    ) {}

  // getDataFromAPI() {
  //   // const apiUrl = 'http://localhost:3000/user';

  //   this.http.get(apiUrl).subscribe(
  //     (data) => {
  //       this.usersInfo = data as any[];
  //       console.log(this.usersInfo);
  //       console.log(data);
  //       console.warn(data);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
      
  //   )
  // }

  openDialog() {
    const dialogRef = this.dialog.open(ModalAddUserComponent, {
      panelClass: 'modal-border',
      data: { dialogRef: null } // Inicializa a propriedade dialogRef como null
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(`Dialog result: ${result}`);
      }
    });
}
  
ngOnInit() {
  // this.getDataFromAPI();
}
  toppings = new FormControl('');
  toppingList: string[] = ['Nome', 'E-mail', 'Cargo', 'Terceiro'];

  // usersInfo = [
  //   {
  //     name: 'Aldo',
  //     mail: 'aldo@gmail.com',	
  //     role: 'Técnico',
  //     outsourced: 'Não',
  //     date: '02/05/2023'
  //   },
  //   {
  //     name: 'Cezar Santos',
  //     mail: 'cezar@gmail.com',	
  //     role: 'Técnico',
  //     outsourced: 'Não',
  //     date: '02/05/2023'
  //   },
  //   {
  //     name: 'Geovandro',
  //     mail: 'geovandro@gmail.com',	
  //     role: 'Técnico',
  //     outsourced: 'Não',
  //     date: '02/05/2023'
  //   },
  //   {
  //     name: 'João Eduardo',
  //     mail: 'joaoeduardo@gmail.com',	
  //     role: 'Técnico',
  //     outsourced: 'Não',
  //     date: '02/05/2023'
  //   },
  //   {
  //     name: 'Otávio',
  //     mail: 'otavio@gmail.com',	
  //     role: 'Técnico',
  //     outsourced: 'Não',
  //     date: '02/05/2023'
  //   },
  //   {
  //     name: 'Osivado',
  //     mail: 'osivaldo@gmail.com',	
  //     role: 'Técnico',
  //     outsourced: 'Não',
  //     date: '02/05/2023'
  //   },
  //   {
  //     name: 'João Eduardo',
  //     mail: 'joaoeduardo@gmail.com',	
  //     role: 'Técnico',
  //     outsourced: 'Não',
  //     date: '02/05/2023'
  //   }
  // ] 
  
}
