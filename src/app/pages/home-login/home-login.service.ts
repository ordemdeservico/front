import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeLogin, LoginResponse } from './home-login';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class HomeLoginService {

  constructor(private http: HttpClient) { }

  validateLogin(loginUser: HomeLogin){
      return this.http.post<LoginResponse>(`${API}/user/login`, loginUser)
  }
}
