import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListAdm } from './list-adm';
import { ListAdmService } from '../list-adm.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { DatePipe } from '@angular/common';
import { ModalAddUserComponent } from 'src/app/components/modal-add-user/modal-add-user.component';

@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.scss'],
  providers: [DialogService, MessageService, DatePipe]
})
export class ListAdmComponent implements OnInit {

  userList: ListAdm[] = [];
  visible!: boolean;
  selectedUser: ListAdm | undefined;
  ref!: DynamicDialogRef;
  dataAtual: string;


  constructor(
    private ListAdmService: ListAdmService,
    public dialogService: DialogService, 
    public messageService: MessageService,
    private datePipe: DatePipe,
  ) {
      this.dataAtual = this.obterDataAtual();
  }



  obterDataAtual(): string {
    const dataAtual = new Date();
    return this.datePipe.transform(dataAtual, 'dd/MM/yyyy') || ''; 
  }

  openModal(): void {
    this.ref = this.dialogService.open(ModalAddUserComponent, {
      header: 'Cadastrar Usuário',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      styleClass: 'custom-dialog-header'
    })
  }
  
  show(user: ListAdm): void {
    this.ref = this.dialogService.open(UserDetailsComponent, {
      header: user.nome,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        selectedUser: user
      }
    });
  }

  loadUserList(): void {
    this.ListAdmService.listUsers().subscribe(
      (response) => {
        console.log(response);
        this.userList = response.result as ListAdm[];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Successo!', detail: 'Login efetuado.' });
  }


//   openDialog() {
//     const dialogRef = this.dialog.open(ModalAddUserComponent, {
//       panelClass: 'modal-border',
//       data: { dialogRef: null } // Inicializa a propriedade dialogRef como null
//     });

//     dialogRef.afterClosed().subscribe((result: any) => {
//       if (result) {
//         console.log(`Dialog result: ${result}`);
//       }
//     });
// }
  
  ngOnInit() {
    this.loadUserList();
    
  }

  toppings = new FormControl('');
  toppingList: string[] = ['Nome', 'E-mail', 'Cargo', 'Terceiro'];
}
  