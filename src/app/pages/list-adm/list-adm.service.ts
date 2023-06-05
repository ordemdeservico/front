import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/shared/token.service';
import { environment } from 'src/environments/environment';
import { ListAdm } from './list-adm';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ListAdmService {

  constructor(private tokenService : TokenService, private http: HttpClient) { }

  private readonly API = `${API}/user`;

  listUsers(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);
    return this.http.get<any>(this.API, { headers });
  }

  
}