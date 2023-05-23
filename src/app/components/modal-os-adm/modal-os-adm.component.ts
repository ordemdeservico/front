import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-modal-os-adm',
  templateUrl: './modal-os-adm.component.html',
  styleUrls: ['./modal-os-adm.component.scss'],
})
export class ModalOsAdmComponent {
  
  toppings = new FormControl('');

  toppingList: string[] = ['Ruim', 'Regular', 'Bom', 'Ótimo', 'Excelente']; 

}
