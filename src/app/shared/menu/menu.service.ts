import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token.service';

const API = environment.API;


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly API = `${API}/user`;

  constructor(private tokenService : TokenService, private http: HttpClient) { }

  listAdm(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);
    return this.http.get<any>(this.API, { headers });
  }

  changePassword(senhaVelha: string, senhaNova: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);
    const body = { senhaVelha, senhaNova };
    const id = this.tokenService.returnId();
  
    return this.http.patch<any>(`${this.API}/password/${id}`, body, { headers });
  }

}
