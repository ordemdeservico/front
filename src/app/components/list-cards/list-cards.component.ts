import { Component, OnInit } from '@angular/core';
import { ListCardsService } from './list-cards.service';
import { OrderService } from 'src/app/shared/models/order-service.model';


@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {

  orderServices: OrderService[] = [];

  constructor (
    private cardsService: ListCardsService,
  ) { }


  getCardInfo() {
    this.cardsService.getCardInfos().subscribe(
      (response) => {
        this.orderServices = response.result;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {
      this.getCardInfo();
  }

}
