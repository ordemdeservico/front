import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListAdm } from './list-adm';
import { ListAdmService } from './list-adm.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
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
  


  constructor(
    private ListAdmService: ListAdmService,
    public dialogService: DialogService, 
    public messageService: MessageService
  ) { }


  openModal(): void {
    this.ref = this.dialogService.open(ModalAddUserComponent, {
      header: 'Cadastrar Usuário',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      styleClass: 'custom-dialog-header'
    })
  }
  


  loadUserList(): void {
    this.ListAdmService.listUsers().subscribe(
      (response) => {
        this.userList = response.result as ListAdm[];
      },
      (error) => {
        console.error(error);
      }
    );
  }


  ngOnInit() {
    this.loadUserList();
    
  }

  toppings = new FormControl('');
  toppingList: string[] = ['Nome', 'E-mail', 'Cargo', 'Terceiro'];
}
  