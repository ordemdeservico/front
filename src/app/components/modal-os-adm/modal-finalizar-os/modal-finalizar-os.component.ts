import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ListCardsService } from '../../list-cards/list-cards.service';
import { OrderService } from "src/app/shared/models/order-service.model";

@Component({
  selector: 'app-modal-finalizar-os',
  templateUrl: './modal-finalizar-os.component.html',
  styleUrls: ['./modal-finalizar-os.component.scss']
})
export class ModalFinalizarOsComponent implements OnInit {
  @Input() orderService?: OrderService;

  feedback: string[] = [];


  constructor(
    private ref: DynamicDialogRef,
    private listCardsService: ListCardsService
  ) {

   }

  closeModal(): void {
    this.ref.close();
  }

  ngOnInit() {

    this.feedback = [
      'Ruim',
      'Regular',
      'Bom',
      'Ótimo',
      'Excelente'
    ];
  }

}
