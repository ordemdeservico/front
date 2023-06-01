import { Token } from "@angular/compiler";
import { Injectable } from '@angular/core';

const KEY = 'token';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  returnToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  saveToken(token: string){
      localStorage.setItem(KEY, token);
      console.log(token);
  }

  deleteToken(){
      localStorage.removeItem(KEY);
  }

  haveToken(){
      console.log(this.returnToken);
      return !!this.returnToken();
    }

}
