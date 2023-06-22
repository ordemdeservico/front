import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeLogin, LoginResponse, UserInfo } from './home-login';
import { TokenService } from 'src/app/shared/token.service';
import { Observable, catchError, map, throwError } from 'rxjs';

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

  infoUser():Observable<UserInfo> {
    return this.http.get<UserInfo>(`${API}/user/identify`)
  }

  userVerify(): Observable<string> {
    return this.http.get<any>(`${API}/user/identify`).pipe(
      map((response: any) => response.cargo),
      catchError((error) => {
        console.error(error);
        return throwError(error.message);
      })
      
    );
  }
  // userVerify(): Observable<string> {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.returnToken()}`);
  //   return this.http.get<string>(`${API}/user/identify`, { headers });
  // }

  // isVerify(): Observable<string> {
  //   return this.userVerify().pipe(
  //     map((response: any) => {
  //       if (response.cargo == 'Admin') {
  //         console.log('Usuário autenticado, cargo:', response.cargo);
  //         return response.cargo;
  //       } else if (response.cargo == 'Tecnico') {
  //         console.log('Usuário autenticado, cargo:', response.cargo);
  //         return response.cargo;
  //       } else if (response.cargo == 'Solicitante') {
  //         console.log('Usuário autenticado, cargo:', response.cargo);
  //         return response.cargo;
  //       } else {
  //         console.log('Usuário não autenticado, cargo:', response.cargo);
  //         return response.cargo;
  //       }
  //     }),
  //     catchError((error) => {
  //       console.error(error);
  //       return throwError(error.message);
  //     })
  //   );
  // }

}
