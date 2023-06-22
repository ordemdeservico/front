import { Component, Input } from '@angular/core';
import { OrderService } from 'src/app/shared/models/order-service.model';

@Component({
  selector: 'app-modal-concluir-os',
  templateUrl: './modal-concluir-os.component.html',
  styleUrls: ['./modal-concluir-os.component.scss']
})
export class ModalConcluirOsComponent {

  @Input("orderService") orderService?: OrderService;



}
