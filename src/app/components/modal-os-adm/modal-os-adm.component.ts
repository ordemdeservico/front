import { Component, Input, OnInit } from "@angular/core";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ListCardsService } from "../list-cards/list-cards.service";
import { OrderService } from "src/app/shared/models/order-service.model";

@Component({
  selector: 'app-modal-os-adm',
  templateUrl: './modal-os-adm.component.html',
  styleUrls: ['./modal-os-adm.component.scss']
})
export class ModalOsAdmComponent implements OnInit {

  @Input() orderService?: OrderService;

  feedback: string[] = [];

  constructor(
    private ref: DynamicDialogRef,
    private listCardsService: ListCardsService
  ) { }

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
