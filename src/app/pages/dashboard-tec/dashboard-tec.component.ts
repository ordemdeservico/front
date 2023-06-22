import { Component } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard-tec',
  templateUrl: './dashboard-tec.component.html',
  styleUrls: ['./dashboard-tec.component.scss']
})
export class DashboardTecComponent {

  constructor(
    private router: Router
  ) { }


  navigateToForm(){
    this.router.navigate(['/home-form'])
  }

}
