import { Component, OnInit } from '@angular/core';
import { HomeLogin, LoginResponse } from './home-login';
import { HomeLoginService } from './home-login.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
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
export class HomeLoginComponent implements OnInit {

  userLogin!: HomeLogin;
  formGroup: FormGroup;

  constructor(
    private service: HomeLoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private token: TokenService,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  submitLogin() {
    if (this.formGroup.valid) {
      const formValues = this.formGroup.value;
      this.service.validateLogin(formValues).subscribe(
      (res: LoginResponse) => {
        if (res.token) {
          this.token.saveToken(res.token);
          this.authService.setIsAuthenticated(true);
          if (res.nome) { this.token.saveName(res.nome) }
          if (res.email) { this.token.saveMail(res.email)}
          if (res.id_usuario) { this.token.saveId(res.id_usuario); }
          if (res.cargo) {
            this.token.saveRole(res.cargo)
            if (res.cargo === 'Admin') {
              this.router.navigate(['/dashboard-adm']);	
            }
            else if (res.cargo === 'Tecnico') {
              this.router.navigate(['/dashboard-tec']);	
            }
            else if (res.cargo === 'Solicitante') {
              this.router.navigate(['/dashboard-user']);	
            }
          }
          
      } else {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'E-mail ou Senha incorretos.' });
        }
      },
      error => {
        console.error("Erro ao enviar os dados:", error);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: error.error.message  || 'E-mail ou Senha incorretos.' });
      }
      );
    }
  }
  
  ngOnInit() {
  }
}
