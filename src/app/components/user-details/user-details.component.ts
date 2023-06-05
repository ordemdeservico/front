import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ListAdm } from 'src/app/pages/list-adm/list-adm';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [ DatePipe ]
})
export class UserDetailsComponent implements OnInit {

  selectedUser: ListAdm | undefined;
  data_insercao!: string;
  
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private datePipe: DatePipe
  ) {}

  terceirizadoLabel(): string {
    if (this.selectedUser && typeof this.selectedUser.terceirizado === 'number' && this.selectedUser.terceirizado === 1) {
      return 'Sim';
    } else {
      return 'Não';
    }
  }
  

  ngOnInit(): void {
    this.selectedUser = this.config.data.selectedUser;
  }
  
  
  

}
