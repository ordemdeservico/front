import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { TokenService } from 'src/app/shared/token.service';
import { environment } from 'src/environments/environment';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ListCardsService {
  private selectedOrderService!: OrderService;

  constructor(private http: HttpClient, private tokenService : TokenService) { }

  getCardInfos(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);
    return this.http.get(`${API}/ordem-servico/`, { headers });
  }

  setSelectedOrderService(orderService: OrderService): void {
    this.selectedOrderService = orderService;
  }

  getSelectedOrderService(): OrderService {
    return this.selectedOrderService;
  }
  
}
