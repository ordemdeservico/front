import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeLogin, LoginResponse } from './home-login';
import { TokenService } from 'src/app/shared/token.service';
import { Observable } from 'rxjs';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class HomeLoginService {

  constructor(
    private http: HttpClient, 
    private tokenService : TokenService
  ) { }

  validateLogin(loginUser: HomeLogin){
      return this.http.post<LoginResponse>(`${API}/user/login`, loginUser)
  }


  userVerify(): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);
    return this.http.get<string>(`${API}/user/identify`, { headers });
  }

}
