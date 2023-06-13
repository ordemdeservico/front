import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { ListCardsService } from './list-cards.service';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { FilterOs } from 'src/app/pages/dashboard-adm/dashboard-adm';


@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnChanges {

  @Input() selectedFilterAdm: any;

  orderServices: OrderService[] = [];
  
  constructor (private cardsService: ListCardsService) { }

  ngOnInit(): void {
    this.cardsService.getOsByFilter('').subscribe(
      (res) => {
        this.orderServices = res.result;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedFilterAdm)
    console.log('Alterações detectadas:', changes);
    if (changes['selectedFilterAdm'] && this.selectedFilterAdm || '') {
      this.getOsByFilters();
    }
  }

  getOsByFilters() { 
    console.log('Filtro:', this.selectedFilterAdm[0]);

    this.cardsService.getOsByFilter(this.selectedFilterAdm[0] || '').subscribe(
      (res) => {
        console.log('Resposta da API:', res);
        this.orderServices = res.result;
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
