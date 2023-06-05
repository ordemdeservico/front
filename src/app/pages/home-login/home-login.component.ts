import { Component, OnInit } from '@angular/core';
import { HomeLogin, LoginResponse } from './home-login';
import { HomeLoginService } from './home-login.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';
import { MessageService } from 'primeng/api';

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
    private messageService: MessageService
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

  submitLogin() {
    if (this.formGroup.valid) {
      const formValues = this.formGroup.value;
      this.service.validateLogin(formValues).subscribe(
      (res: LoginResponse) => {
        if (res.token) {
          this.token.saveToken(res.token);
          if (res.id_usuario) {
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
      }
      );
    }
  }
  
  ngOnInit() {
  }
}
