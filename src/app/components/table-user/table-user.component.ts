import { Component, Input } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent {

  @Input() users: any;

  
}
