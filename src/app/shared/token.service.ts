import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const KEY = 'token';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private authService: AuthService) {
    this.authService.setIsAuthenticated(this.haveToken());
  }

  saveRole(cargo: string) {
    localStorage.setItem('role', cargo);
  }

  returnRole() {
    return localStorage.getItem('role');
  }

  deleteRole() {
    localStorage.removeItem('role');

  }

  saveId(id_usuario: string) {
    localStorage.setItem('id', id_usuario);
  }

  returnId() {
    return localStorage.getItem('id' || '');
  }

  deleteId() {
    localStorage.removeItem('id');
  }

  saveName(nome: string) {
    localStorage.setItem('name', nome);
  }

  returnName() {
    return localStorage.getItem('name' || '');
  }

  deleteName() {
    localStorage.removeItem('name');
  }

  saveMail(email: string) {
    localStorage.setItem('email', email);
  }

  returnMail() {
    return localStorage.getItem('email' || '');
  }

  deleteMail() {
    localStorage.removeItem('email');
  }

  returnToken(){
    return localStorage.getItem(KEY) || '';
  }

  saveToken(token: string) {
    localStorage.setItem(KEY, token);
    this.authService.setIsAuthenticated(true);
    
  }

  deleteToken(){
      localStorage.removeItem(KEY);
      this.authService.setIsAuthenticated(false);
  }

  haveToken() {
    const hasToken = !!this.returnToken();
    return hasToken;
  }

}
