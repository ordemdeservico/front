import { Component, OnInit } from '@angular/core';
import { HomeLogin, LoginResponse } from './home-login';
import { HomeLoginService } from './home-login.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  submitLogin() {
    if (this.formGroup.valid) {

      const formValues = this.formGroup.value;
      console.log(formValues)
      this.service.validateLogin(formValues).subscribe(
      (res: LoginResponse) => {
        console.log("Dados enviados com sucesso!");
        if (res.token) {
          localStorage.setItem('token', res.token);
          if (res.id_usuario) {
            localStorage.setItem('id_usuario', res.id_usuario);
            console.log(res.id_usuario);
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
        // Lógica em caso de erro no envio para o backend
        console.error("Erro ao enviar os dados:", error);
      }
      );
    }
  }
  
  ngOnInit() {
  }
}
