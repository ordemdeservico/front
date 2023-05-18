import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-os-tec',
  templateUrl: './modal-os-tec.component.html',
  styleUrls: ['./modal-os-tec.component.scss']
})
export class ModalOsTecComponent {
  
  menuOpen = false;

  rotateIcon() {
    this.menuOpen = !this.menuOpen;
  }

}
