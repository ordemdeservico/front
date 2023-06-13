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
      if (filtros.data.filter == 'setor_principal_id') {
        params = params.append(filtros.data.filter || '', filtros.data.value || '');
      } else if (filtros.data.filter == 'status_os') {
        params = params.append(filtros.data.filter || '', filtros.data.value || '');
      } else if (filtros.data.filter == 'nivel_prioridade') {
        console.log('teste', filtros.data.filter)
        params = params.append(filtros.data.filter || '', filtros.data.value || '');
      } 
  
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
