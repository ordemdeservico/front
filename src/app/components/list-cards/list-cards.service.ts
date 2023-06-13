import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterOs } from 'src/app/pages/dashboard-adm/dashboard-adm';
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

  getOsByFilter(filtros: any): Observable<any> {
    console.log('Filtros:', filtros);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`).set('Content-Type', 'application/json');
    let params = new HttpParams();
  
    if (filtros) {

      console.log('Filtros:', filtros);
   
      // params = params.set('nivel_prioridade', filtros || '');

      
      params = params.set('setor_principal_id', filtros || '');

     
      // params = params.set('status_os', filtros || '')
      console.log('Params:', params)
    }
    const options = { params: params, headers: headers };
    return this.http.get(`${API}/ordem-servico/admin/filtros`, options );
  }

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
