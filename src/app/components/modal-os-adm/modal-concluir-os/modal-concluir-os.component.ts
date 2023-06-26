import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ListCardsService } from '../../list-cards/list-cards.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-concluir-os',
  templateUrl: './modal-concluir-os.component.html',
  styleUrls: ['./modal-concluir-os.component.scss'],
  providers: [ DatePipe ]
})
export class ModalConcluirOsComponent implements OnInit {

  @Input("orderService") orderService?: OrderService;
  @Input() role?: string;
  @Output() attCards = new EventEmitter();

  formGroup: FormGroup;

  constructor(
    private listCardsService: ListCardsService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
  ) {
    this.formGroup = this.formBuilder.group({
      material: [''],
      relatorio: ['', Validators.required],
    });
   }

  obterDataAtual(): string {
    const data_insercao = new Date();
    return this.datePipe.transform(data_insercao, 'yyyy/MM/dd') || ''; 
  }

  concluirOs() {
    if (this.formGroup.valid) {

      const values: any =  {
        ordem_servico_id: this.orderService!.id,
        data_final: this.obterDataAtual(),
        material: this.formGroup.value.material,
        relatorio: this.formGroup.value.relatorio
      }

      this.listCardsService.concluirOs(values).subscribe({
        next: (res) => {
          console.log(res);
          console.log(values)
          this.attCards.emit(true);
        },
        error: (err) => {
          console.error(err);
        }
      })
      console.log('values: ', this.formGroup.value)
    }
  }


  ngOnInit(): void {
      // console.log('Concluir: ', this.role)
  }


}
