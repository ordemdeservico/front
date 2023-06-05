import { AfterViewInit, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalOsAdmComponent } from '../modal-os-adm/modal-os-adm.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  

  @Input() os: any;

  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(ModalOsAdmComponent, {panelClass: 'modal-border'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // ngAfterViewInit(): void {
  //   console.log(this.os);
  // }

  
}
