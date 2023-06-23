import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.API;

@Injectable()
export class HomeFormService {
  constructor(private http: HttpClient) { }

  setorPrincipalGetAll(): Observable<any> {
    return this.http.get(`${API}/setor-principal`);
  }

  setorSecundarioGetBySetorPrincipal(): Observable<any> {
    return this.http.get(`${API}/setor-secundario/instituicao`);
  }

  tipoServicoGetAll(): Observable<any> {
    return this.http.get(`${API}/tipo-servico`);
  }
}
