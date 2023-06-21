import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListCardsService } from '../../list-cards/list-cards.service';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { Observable, lastValueFrom, map } from 'rxjs';
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ModalEvent } from 'src/app/shared/models/modalEvent.model';


interface DropdownOptions {
  label: string;
  value: number;
}

@Component({
  selector: 'app-modal-aprovar-os',
  templateUrl: './modal-aprovar-os.component.html',
  styleUrls: ['./modal-aprovar-os.component.scss'],

})

export class ModalAprovarOsComponent implements OnInit {

  @Input("orderService") orderService?: OrderService;
  @Input() displayModal?: boolean;
  @Output() displayModalEvent = new EventEmitter<ModalEvent>();


  setor_principal: { label: string; value: number }[] = [];
  setor_secundario: DropdownOptions[] = [];
  tecnico: DropdownOptions[] = [];
  tipo_servico: DropdownOptions[] = [];
  nivel_prioridade: string[] = [];
  selectedSetor?: number;
  formGroup: FormGroup;
  formValues: any[] = [];
  textValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private ref: DynamicDialogRef,
    private listCardsService: ListCardsService,

  ) {
    this.formGroup = this.formBuilder.group({
      setor_principal_id: ['', Validators.required],
      setor_secundario_id: ['', Validators.required],
      tipo_servico_id: ['', Validators.required],
      nivel_prioridade: ['', Validators.required],
      tecnico_id: ['', Validators.required],
      descricao: [this.orderService?.descricao, Validators.required]
    });
  }


  openModalDecline(): any {
    const modalEvent: ModalEvent = {
      aprove: false,
      decline: true
    };
    this.displayModalEvent.emit(modalEvent);
  }



  getFormValues() {
    this.formValues = this.formGroup.value;
    console.log(this.formValues);
    console.log(Object.keys(this.formGroup.controls));

    const nomesItens = Object.keys(this.formGroup.controls);
    const parametros: any = {};

    for (const nomeItem of nomesItens) {
      const valor = this.formGroup.controls[nomeItem].value;
      parametros[nomeItem] = valor;
    }

    parametros['ordem_servico_id'] = this.orderService!.id;

    const value: any = {
      ...parametros,
    };

    this.listCardsService.aprovarOs(value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );

  }

  async ngOnInit() {

    this.tecnico = await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllTec()));
    this.setor_principal= await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllSetoresPrincipais()));
    this.tipo_servico = await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllServices()));
    
    const {setor_principal_id} = this.orderService!
    if (setor_principal_id) {
      this.selectedSetor = setor_principal_id;
    }
    const {descricao} = this.orderService!
    if (descricao) {
      this.textValue = descricao;
    }

    this.getAllSecundarios();
    

    this.nivel_prioridade = [
      'P1 - 1 dia',
      'P2 - 2 dias',
      'P3 - 3 dias',
      'P4 - 7 dias',
      'P5 - 10 dias',
      'P6 - 15 dias',
      'P7 - 25 dias',
    ]

  }

  async getAllSecundarios() {
    const selectedOption = this.selectedSetor;
    if (selectedOption) {
      interface SetorSecundario {
        setor_secundario_com_bloco: string;
        id: number;
      }

      this.setor_secundario = await lastValueFrom(this.listCardsService.getAllSetoresSecundarioByPrimario(selectedOption)
      .pipe(
        map((res:{erros:any ,result:SetorSecundario[]}):SetorSecundario[] => res.result),
        map((result): DropdownOptions[] => result.map((item): DropdownOptions => ({
          label: item.setor_secundario_com_bloco!,
          value: item.id!
        }))
        )
      ));
    } 
  }

  private formatToDropdownptions<T extends {nome?:string;id?:number}>(req:Observable<{erros:any,result:T[]}>):Observable<DropdownOptions[]> {
   return req
      .pipe(
        map((res): T[] => res.result),
        map((result): DropdownOptions[] => result.map((item): DropdownOptions => ({
          label: item.nome!,
          value: item.id!
        }))
        )
      );
  }
}
