import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ListAdm } from 'src/app/pages/list-adm/list-adm';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  selectedUser: ListAdm | undefined;
  
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}


  ngOnInit(): void {
    this.selectedUser = this.config.data.selectedUser;
  }

}
