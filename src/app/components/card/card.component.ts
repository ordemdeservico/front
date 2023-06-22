import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [MessageService]
})
export default class CardComponent implements OnInit {

  @Input() orderService?: OrderService;
  @Input() role?: string;
  
  displayModal: boolean = false;

  constructor() { }

  openModal() {
    this.displayModal = !this.displayModal;
  }

  attModalSolicitada(event: boolean) {
    this.displayModal = event;
    
  }

  ngOnInit() {
    
  }

}
