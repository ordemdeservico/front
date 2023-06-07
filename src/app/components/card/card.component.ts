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

  @Input() card?: OrderService;

  displayModal: boolean = false;


  constructor() { }

    openModal() {
      this.displayModal = !this.displayModal;
    }

  ngOnInit() {

  }

}
