import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalEvent } from 'src/app/shared/models/modalEvent.model';
import { ListCardsService } from '../../list-cards/list-cards.service';
import { OrderService } from "src/app/shared/models/order-service.model";

@Component({
  selector: 'app-modal-declinar-os',
  templateUrl: './modal-declinar-os.component.html',
  styleUrls: ['./modal-declinar-os.component.scss']
})
export class ModalDeclinarOsComponent {

  @Input() orderService?: OrderService
  @Output() displayModalEvent = new EventEmitter();

  constructor(private cardService: ListCardsService) {
    
  }

  backModal(): void {
    const modalEvent: ModalEvent = {
      aprove: true,
      decline: false
    };
    this.displayModalEvent.emit(modalEvent);
  }

  closeModal(): void {
    const modalEvent: ModalEvent = {
      aprove: false,
      decline: false
    };
    this.displayModalEvent.emit(modalEvent);

  if (this.orderService) {
    
    this.cardService.declinarOs(this.orderService.id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    )
  }

  }

}
