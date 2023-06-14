import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ListCardsService } from './list-cards.service';
import { OrderService } from 'src/app/shared/models/order-service.model';



@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit, OnChanges {

  @Input() selectedFilterAdm: any;

  orderServices: OrderService[] = [];
  
  constructor (private cardsService: ListCardsService) { }

  ngOnInit(): void {
    this.cardsService.getOsByFilter([]).subscribe(
      (res) => {
        this.orderServices = res.result;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedFilterAdm'] && this.selectedFilterAdm || '') {
      this.getOsByFilters();
    }
  }

  getOsByFilters() { 
    const filters = this.selectedFilterAdm.map((filter: { data: any; }) => filter.data);
    this.cardsService.getOsByFilter(filters).subscribe(
      (res) => {
        this.orderServices = res.result;
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
