import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ListAdmService {

  constructor(private http: HttpClient) { }

  listUsers(): Observable<any> {
    return this.http.get<any>(`${API}/user`);
  }

  getUserById(id: number): Observable<any> {
    let params = new HttpParams().set('id', id);

    return this.http.get(`${API}/user/${id}`, { params: params })
  }

  deleteUserByName(nome: string): Observable<any> {
    let params = new HttpParams().set('nome', nome);

    return this.http.delete(`${API}/user/deletar`, { params: params })
  }

  updateUser(params: any, id: number): Observable<any> {
    let httpParams = new HttpParams();
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }
      
  console.log(httpParams);
  return this.http.patch<any>(`${API}/user/${id}`, httpParams);
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${API}/tipo-servico/`);
  }


  
}