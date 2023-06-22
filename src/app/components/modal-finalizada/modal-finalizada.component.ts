import { Component, Input } from '@angular/core';
import { OrderService } from 'src/app/shared/models/order-service.model';

@Component({
  selector: 'app-modal-finalizada',
  templateUrl: './modal-finalizada.component.html',
  styleUrls: ['./modal-finalizada.component.scss']
})
export class ModalFinalizadaComponent {
  @Input("orderService") orderService?: OrderService;
  
}
