import { Component, OnInit } from '@angular/core';
import { ListAdm } from './list-adm';
import { ListAdmService } from './list-adm.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DatePipe } from '@angular/common';
import { ModalAddUserComponent } from 'src/app/components/modal-os-adm/modal-add-user/modal-add-user.component';


@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.scss'],
  providers: [DialogService, MessageService, DatePipe, ConfirmationService]
})
export class ListAdmComponent implements OnInit {


  userList: ListAdm[] = [];
  ref!: DynamicDialogRef;
  displayModalAction: boolean = false;
  displayModalDelete: boolean = false;
  displayModalEdit: boolean = false;
  user: any;
  selectedUser?: ListAdm;

  constructor(
    private ListAdmService: ListAdmService,
    public dialogService: DialogService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }



  editUser(user: ListAdm) {
    this.selectedUser = user;
    // console.log(user)
    console.log(this.selectedUser)
    this.displayModalEdit = !this.displayModalEdit
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

  openModalAction(): void {
    this.displayModalAction = !this.displayModalAction;
  }  

  attModalEdit(event: any) {
    this.displayModalEdit = event
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

}
  