import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { MessageService } from 'primeng/api';
import { ModalEvent } from 'src/app/shared/models/modalEvent.model';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [MessageService]
})
export default class CardComponent implements OnInit {

  @Input() card?: OrderService;

  displayModalSolicitada: boolean = false;
  displayModalDecline: boolean = false;


  constructor() { }

  openModal() {
    this.displayModalSolicitada = !this.displayModalSolicitada;
  }

  attMoldalDecline(event: any) {
    this.displayModalDecline = event.decline;
    this.displayModalSolicitada = event.aprove;
    console.log(event.aprove, event.decline);
  }

  attModalSolicitada(event: ModalEvent) {
    this.displayModalDecline = event.decline;
    this.displayModalSolicitada = event.aprove;
    console.log(event.aprove, event.decline);
  }

  ngOnInit() {
    
  }

}
