import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuService } from './menu.service';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { TokenService } from '../token.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MessageService]
})
export class MenuComponent implements OnInit {
  isOnRouteAdm: boolean = false;
  visible: boolean = false;
  value: string = '';
  username = '';
  usermail = '';

  constructor(
    private router: Router,
    private menuService: MenuService,
    private token: TokenService,
    private authService: AuthService
    ) { }
    

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
      this.menuService.listAdm().subscribe(
        (response) => {
          this.router.navigate(['/dashboard-adm/list-adm']);  
        },
        (error) => {
          console.error('Erro na requisição para a API:', error);
        }
      );
    }
  
    

  ngOnInit() {
    this.isOnRouteAdm = this.router.isActive('/dashboard-adm', false);
    this.username = this.token.returnName() as string; 
    this.usermail = this.token.returnMail() as string;
  }
  

}
