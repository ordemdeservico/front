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
      this.token.deleteToken();
      this.token.deleteName();
      this.token.deleteMail();
      this.token.deleteId();
      this.token.deleteRole();
      this.authService.setIsAuthenticated(false);
      this.router.navigateByUrl('/home-login');
    }

    navigateToListAdm() {
      this.router.navigate(['/list-adm']);  
    }
  
    


  ngOnInit() {
    this.loginService.infoUser().subscribe(
      (res) => {
        if (res.cargo === 'Admin') {
          this.isAdmin = true;
        }
        console.log('Resposta: ',res);
        console.log('Resposta: ',res.id_usuario);
        console.log('Resposta: ',res.nome);
        console.log('Resposta: ',res.email);
        console.log('Resposta: ',res.cargo);
      
      },
      (err) => {
        console.error(err);
      }
    )

    // this.loginService.userVerify().subscribe(
    //   (cargo: string) => {
    //     this.isAdmin = cargo === 'Admin';
    //     console.log('teste', cargo);
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
    this.username = this.token.returnName() as string; 
    this.usermail = this.token.returnMail() as string;
  }
  

}
