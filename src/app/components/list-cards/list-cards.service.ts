import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { TokenService } from 'src/app/shared/token.service';
import { environment } from 'src/environments/environment';


const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class ListCardsService {
  private selectedOrderService!: OrderService;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getOsByFilter(filtros: any[]): Observable<any> {
    let params = new HttpParams();

    if (filtros) {
      for (const filter of filtros) {
        if (
          filter.filter === 'setor_principal_id' ||
          filter.filter === 'status_os' ||
          filter.filter === 'nivel_prioridade'
        ) {
          params = params.append(filter.filter, filter.value);
        }
      }
    }

    const options = { params: params };
    return this.http.get(`${API}/ordem-servico/admin/filtros`, options);
  }

  getCardInfos(): Observable<any> {
    return this.http.get(`${API}/ordem-servico/`);
  }

  getAllTec(): Observable<any> {
    return this.http.get(`${API}/user/tecnico`);
  }

  getAllServices(): Observable<any> {
    return this.http.get(`${API}/tipo-servico/`);
  }

  getAllSetoresPrincipais(): Observable<any> {
    return this.http.get(`${API}/setor-principal/`);
  }

  getAllSetoresSecundarioByPrimario(setor: any): Observable<any> {
    let params = new HttpParams();

    if (setor) {
      params = params.append('idSetorPrincipal', setor);
    }
    const options = { params: params };
    return this.http.get(`${API}/setor-secundario/instituicao`, options);
  }

  getAllSetorSecundarios(): Observable<any> {
    return this.http.get(`${API}/setor-secundario/`);
  }

  aprovarOs(params: any): Observable<any> {
    let httpParams = new HttpParams();
    
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }
  
    console.log(httpParams);
    return this.http.patch<any>(`${API}/ordem-servico/aprovar`, httpParams);
  }


  declinarOs(params: number): Observable<any> {
    let httpParams = new HttpParams().set("ordem_servico_id", params)
    console.log(params);
    return this.http.delete(`${API}/ordem-servico/rejeitar`, { params: httpParams })
  }

  finalizarOs(id: number, feedback: string): Observable<any> {
    let params = new HttpParams();

    params = params.set("ordem_servico_id", id);
    params = params.set("feedback", feedback);
    console.log('Finalizar OS: ', params);
    return this.http.patch(`${API}/ordem-servico/finalizar`, params);
  }

  setSelectedOrderService(orderService: OrderService): void {
    this.selectedOrderService = orderService;
  }

  getSelectedOrderService(): OrderService {
    return this.selectedOrderService;
  }
}
