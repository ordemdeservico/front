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
      const feedbackValue = values.feedback;
      this.listCardsService.finalizarOs(this.orderService!.id, feedbackValue).subscribe(
        (res) => {
          console.log('OS Finalizada: ', res);
          this.attCards.emit(true);
        },
        (err) => {
          console.error(err);
        }
      )
    }
  }

  ngOnInit() {
    this.formGroup.patchValue({
      relatorio: this.orderService?.relatorio,
      material: this.orderService?.material
    });
  }

}
