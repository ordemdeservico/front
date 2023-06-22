import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/models/order-service.model';

@Component({
  selector: 'app-modal-os-user',
  templateUrl: './modal-os-user.component.html',
  styleUrls: ['./modal-os-user.component.scss']
})
export class ModalOsUserComponent implements OnInit {

  @Input("orderService") orderService?: OrderService;

  constructor() { }

  ngOnInit(): void {
      
  }

}
