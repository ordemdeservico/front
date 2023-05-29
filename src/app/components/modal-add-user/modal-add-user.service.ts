import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModalAddUser } from './modal-add-user';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ModalAddUserService {
    constructor(private http: HttpClient) { }

    addUser(newUser: ModalAddUser){
        return this.http.post(`${API}/user/create`, newUser)
    }


    // private readonly API = `${API}/user`;

    // listUsers(): Observable<any> {
    //     return this.http.get<any>(this.API);
    // }

}
