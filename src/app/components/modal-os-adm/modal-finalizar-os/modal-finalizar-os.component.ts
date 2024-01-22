import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ListCardsService } from '../../list-cards/list-cards.service';
import { OrderService } from "src/app/shared/models/order-service.model";
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-finalizar-os',
  templateUrl: './modal-finalizar-os.component.html',
  styleUrls: ['./modal-finalizar-os.component.scss']
})
export class ModalFinalizarOsComponent implements OnInit {
  @Input() orderService?: OrderService;
  @Output() attCards = new EventEmitter();

  feedback: string[] = ['Ruim', 'Regular', 'Bom', 'Ótimo', 'Excelente'];
  formGroup: FormGroup;
  images: any[] = [];
  imagesTec: any[] = [];

  constructor(
    private ref: DynamicDialogRef,
    private listCardsService: ListCardsService,
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      relatorio: ['', Validators.required],
      material: [''],
      feedback: ['', Validators.required],
    });
   }

  closeModal(): void {
    this.ref.close();
  }

  submitForm() {
    if (this.formGroup.valid) {
      const values = this.formGroup.value;
      const feedback = values.feedback;

      this.listCardsService.finalizarOs(this.orderService!.id, feedback).subscribe({
        next: (res) => {
          console.log('OS Finalizada: ', res);
          this.attCards.emit(true);
        },
        error: (erro) => {
          console.error('Erro: ', erro);
        }
      })
    }
    // if (this.formGroup.valid) {
    //   const values = this.formGroup.value;
    //   const feedbackValue = values.feedback;
    //   this.listCardsService.finalizarOs(this.orderService!.id, feedbackValue).subscribe(
    //     (res) => {
    //       console.log('OS Finalizada: ', res);
    //       this.attCards.emit(true);
    //     },
    //     (err) => {
    //       console.error(err);
    //     }
    //   )
    // }
  }

  ngOnInit() {
    this.formGroup.patchValue({
      relatorio: this.orderService?.relatorio,
      material: this.orderService?.material
    });

    if (this.orderService?.images) {
      if (this.orderService?.images?.type1) {
        for (let image of this.orderService.images.type1) {
          const imgKey = image.img_key.toString();
          this.images.push(imgKey);
        }
      }
      if (this.orderService?.images?.type2) {
        for (let image of this.orderService.images.type2) {
          const imgKey = image.img_key.toString();
          this.imagesTec.push(imgKey);
        }
      }
    }
  }

}
