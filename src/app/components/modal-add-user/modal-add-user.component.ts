import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { Validators } from '@angular/forms';





@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.scss'],
  
})
export class ModalAddUserComponent {

  toppings = new FormControl('');

  toppingList: string[] = ['Civil', 'Hidraulico', 'Eletrico', 'Pintura', 'Mecanica', 'Mobiliaria', 'Ar-Condicionado', 'Eletronica', 'Outros']; 

  terceiro: string[] = ['Sim', 'Não']; 

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
