import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuService } from '../menu.service';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOnRouteAdm: boolean = false;

  constructor(
    private router: Router,
    private menuService: MenuService
    ) { }
  
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
  }
  

}
