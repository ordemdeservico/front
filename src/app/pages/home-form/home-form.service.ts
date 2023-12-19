import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class HomeFormService {

  constructor( private http: HttpClient ) { }


  solicitarOs(formData: FormData): Observable<any> {
    return this.http.post<any>(`${API}/ordem-servico/solicitar`, formData);
  }

  // solicitarOs(params: any): Observable<any> {
  //   let httpParams = new HttpParams();

  //   for (const key in params) {
  //     if (params.hasOwnProperty(key)) {
  //       httpParams = httpParams.append(key, params[key]);
  //     }
  //   }

  //   return this.http.post<any>(`${API}/ordem-servico/solicitar`, httpParams);
  // }


}
