import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOnRouteAdm: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isOnRouteAdm = this.router.isActive('/dashboard-adm', false);
  }
  

}
