import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListAdm } from './list-adm';
import { ListAdmService } from './list-adm.service';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DatePipe } from '@angular/common';
import { ModalAddUserComponent } from 'src/app/components/modal-add-user/modal-add-user.component';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.scss'],
  providers: [DialogService, MessageService, DatePipe]
})
export class ListAdmComponent implements OnInit {

  @ViewChild('op') overlayPanel!: OverlayPanel;
  userList: ListAdm[] = [];
  ref!: DynamicDialogRef;
  displayModalAction: boolean = false;
  displayModalEdit: boolean = false;
  displayModalDelete: boolean = false;
  displayOverlay: boolean = false;
  items!: MenuItem[];
  
  constructor(
    private ListAdmService: ListAdmService,
    public dialogService: DialogService, 
    public messageService: MessageService
  ) { }

  toggleOverlayPanel(event: any) {
    if (this.overlayPanel) {
      this.overlayPanel.show(event);
    } 
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
    this.items = [
      {
          icon: 'pi pi-pencil',
          command: () => {
              this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          }
      },
      {
          icon: 'pi pi-trash',
          command: () => {
              this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          }
      },
  ];
    
  }

}
  