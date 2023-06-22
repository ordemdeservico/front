import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ModalAddUser } from './modal-add-user';
import { TokenService } from 'src/app/shared/token.service';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ModalAddUserService {

    constructor(private http: HttpClient, private tokenService : TokenService) { }

    addUser(newUser: ModalAddUser) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);
      return this.http.post(`${API}/user/create`, newUser, { headers });
    }
    
}
