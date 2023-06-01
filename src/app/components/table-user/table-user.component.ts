import { Component, Input, OnInit } from '@angular/core';
import { TableUser } from './table-user';
// import { TableUserService } from './table-user.service';
@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent implements OnInit {

  @Input() table: TableUser[] = [];

  // table:TableUser[] = [];

  // constructor(private service: TableUserService) {}

  ngOnInit() {
      // this.service.listUsers().subscribe((event) => {
      //   this.table = event.result as TableUser[]
      //   console.log(this.table);
      // })
  }
}
