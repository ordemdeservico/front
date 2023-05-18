import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-os-adm',
  templateUrl: './modal-os-adm.component.html',
  styleUrls: ['./modal-os-adm.component.scss']
})
export class ModalOsAdmComponent {

  menuOpen = false;

  rotateIcon() {
    this.menuOpen = !this.menuOpen;
  }

  constructor(public dialog: MatDialog) {}

}
