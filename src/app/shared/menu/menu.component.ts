import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { MenuService } from './menu.service';
import { MessageService } from 'primeng/api';
import { TokenService } from '../token.service';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeLoginService } from 'src/app/pages/home-login/home-login.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MessageService]
})
export class MenuComponent implements OnInit {
  isAdmin = false;
  visible: boolean = false;
  value: string = '';
  username = '';
  usermail = '';
  passwordForm: FormGroup;

  constructor(
    private router: Router,
    private menuService: MenuService,
    private token: TokenService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private loginService: HomeLoginService
    ) { 
      this.passwordForm = this.formBuilder.group({
        oldPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(3)]]
      });
    }
    
    changePassword() {
      if (this.passwordForm.valid) {
        const oldPassword = this.passwordForm.get('oldPassword')?.value;
        const newPassword = this.passwordForm.get('newPassword')?.value;


        this.menuService.changePassword(oldPassword, newPassword).subscribe(
          () => {
            this.messageService.add({ severity: 'success', summary: 'Senha atualizada', detail: 'A senha foi atualizada com sucesso.' });
            this.passwordForm.reset();
          },
          (error) => {
            console.error('Erro ao atualizar a senha:', error);
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao atualizar a senha. Por favor, tente novamente.' });
          }
        );
      }
    }


    showDialog() {
        this.visible = true;
    }

    logout() {
      this.visible = false;
      localStorage.clear();
      this.authService.setIsAuthenticated(false);
      this.router.navigateByUrl('/home-login');
    }

    navigateToListAdm() {
      this.router.navigate(['/list-adm']);  
    }
  
    


  ngOnInit() {
    this.loginService.infoUser().subscribe(
      (res) => {
        this.username = res.nome
        this.usermail = res.email
        if (res.cargo === 'Admin') {
          this.isAdmin = true;
        }
      
      },
      (err) => {
        console.error(err);
      }
    )
  }
  

}
