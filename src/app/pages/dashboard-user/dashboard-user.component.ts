import { Component, OnInit, Input } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  
  navigateToForm(){
    this.router.navigate(['/home-form'])
  }

  
  ngOnInit(): void {
      
  }
 
}
