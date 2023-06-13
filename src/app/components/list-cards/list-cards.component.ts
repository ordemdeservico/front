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

  @Input() selectedFilterAdm!: FilterOs;

  orderServices: OrderService[] = [];

  constructor (private cardsService: ListCardsService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Alterações detectadas:', changes);
    if (changes['selectedFilterAdm']) {
      this.getOsByFilters();
      console.log(changes['selectedFilterAdm'])
    };
  }

  getOsByFilters() { 
    console.log('Filtro:', this.selectedFilterAdm);
    this.cardsService.getOsByFilter(this.selectedFilterAdm).subscribe(
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
