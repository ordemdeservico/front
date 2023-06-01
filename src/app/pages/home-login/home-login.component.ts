import { Component, OnInit } from '@angular/core';
import { HomeLogin, LoginResponse } from './home-login';
import { HomeLoginService } from './home-login.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';
@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss']
})
export class HomeLoginComponent implements OnInit {

  userLogin!: HomeLogin;
  formGroup: FormGroup;

  constructor(
    private service: HomeLoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private token: TokenService
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
        console.log("Dados enviados com sucesso!");
        if (res.token) {
          this.token.saveToken(res.token);
          // localStorage.setItem('token', res.token);
          if (res.id_usuario) {
            // localStorage.setItem('id_usuario', res.id_usuario);
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
