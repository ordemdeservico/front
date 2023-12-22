import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/models/order-service.model';

@Component({
  selector: 'app-modal-finalizada',
  templateUrl: './modal-finalizada.component.html',
  styleUrls: ['./modal-finalizada.component.scss']
})
export class ModalFinalizadaComponent implements OnInit{

  @Input("orderService") orderService?: OrderService;

  images: any[] = [];

  ngOnInit(): void {
    if (this.orderService?.images?.type1) {
      for (let image of this.orderService.images.type1) {
        const imgKey = image.img_key.toString();
        this.images.push(imgKey);

        const img = new Image();
        img.src = imgKey;
        img.onload = () => {
          // Imagem carregada com sucesso
          // console.log(`Imagem carregada: ${imgKey}`);
        };
      }
    }
  }

}
