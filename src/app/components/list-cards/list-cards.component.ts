import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ListCardsService } from './list-cards.service';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { HomeLoginService } from 'src/app/pages/home-login/home-login.service';



@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit, OnChanges {

  @Input() selectedFilterAdm: any;

  serviceOrders: OrderService[] = [];
  role: any;


  constructor (
    private cardsService: ListCardsService,
    private loginService: HomeLoginService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
   

  }

  attList(event: boolean) {
    if (event) {
      this.getUserInfo();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedFilterAdm'] && this.selectedFilterAdm || '') {
      this.getOsByFilters();
    }
  }

  getUserInfo() {
    this.loginService.infoUser().subscribe(
      (res) => {
      if (res.cargo == 'Tecnico') {
          this.getOsByTec(res.id_usuario);
      } else if (res.cargo == 'Solicitante') {
          this.getOsByUser(res.id_usuario);
      }
        this.role = res.cargo;
      if (this.role == 'Admin') {
          this.cardsService.getOsByFilter([]).subscribe(
            (res) => {
              this.serviceOrders = res.result;
            }
          );
        }
        
      },
      (err) => {
        console.error(err);
      }
    )
  }

  getOsByUser(id: any) {
    this.cardsService.getOsByUser(id).subscribe(
      (res) => {
        console.log(res);
        this.serviceOrders = res.result;
      },
      (err) => {
        console.error(err);
      }
    )
  }

  getOsByTec(id: any) {
    this.cardsService.getOsByTec(id).subscribe(
      (res) => {
        console.log(res);
        this.serviceOrders = res.result;
      },
      (err) => {
        console.error(err);
      }
    )
  }

  getOsByFilters() { 
    const filters = this.selectedFilterAdm.map((filter: { data: any; }) => filter.data);
    this.cardsService.getOsByFilter(filters).subscribe(
      (res) => {
        this.serviceOrders = res.result;
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
