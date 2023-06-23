import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() attCard = new EventEmitter();
  
  displayModal: boolean = false;

  constructor() { }

  openModal() {
    this.displayModal = !this.displayModal;
  }
  attCards(event: boolean) {
    this.attCard.emit(event)
    console.log('Card: ', event);
  }

  ngOnInit() {
    
  }

}
