import { Component } from '@angular/core';

import { HomeLoginService } from './home-login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss'],
  providers: [MessageService]

})
export class HomeLoginComponent  {

  email: string = '';
  senha: string = '';

  constructor(
    private service: HomeLoginService,
    private router: Router,
    private token: TokenService,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const values = {
      email: form.value.email,
      senha: form.value.senha
    }

    this.service.onLogin(values).subscribe({
      next: (res) => {
        console.info('Usuário logado com sucesso: \n', res)
        this.authService.setIsAuthenticated(true);
        this.token.saveToken(res.token);
        this.token.saveId(res.id_usuario);
        this.token.saveName(res.nome);
        this.token.saveRole(res.cargo);
        this.token.saveMail(res.email);

        if (res.cargo === 'Admin') {
          this.router.navigate(['/dashboard-adm']);
        }
        else if (res.cargo === 'Tecnico') {
          this.router.navigate(['/dashboard-tec']);
        }
        else if (res.cargo === 'Solicitante') {
          this.router.navigate(['/dashboard-user']);
        }
      },
      error: (erro) => {
        console.error('Erro ao enviar dados: ', erro);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: erro.error.message  || 'E-mail ou Senha incorretos.' });
      }
    })
  }
}
