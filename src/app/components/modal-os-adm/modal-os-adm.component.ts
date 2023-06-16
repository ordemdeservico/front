import { Component, Input, OnInit, } from "@angular/core";
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ListCardsService } from "../list-cards/list-cards.service";
import { OrderService } from "src/app/shared/models/order-service.model";
import { Observable, lastValueFrom, map } from "rxjs";

interface DropdownOptions {
  label: string;
  value: number;
}

@Component({
  selector: 'app-modal-os-adm',
  templateUrl: './modal-os-adm.component.html',
  styleUrls: ['./modal-os-adm.component.scss']
})
export class ModalOsAdmComponent implements OnInit {

  @Input() orderService?: OrderService;
  @Input() displayModal?: boolean;

  feedback: string[] = [];
  setor_principal: {label: string; value: number}[] = [];
  setor_secundario: DropdownOptions[] = [];
  tecnico: DropdownOptions[] = [];
  tipo_servico: DropdownOptions[] = [];
  nivel_prioridade: string[] = [];
  selectedSetor?: number;
  formGroup: FormGroup;
  formValues: any[] =[];
  textValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private ref: DynamicDialogRef,
    private listCardsService: ListCardsService
  ) {
      this.formGroup = this.formBuilder.group({
        setor_principal_id: ['', Validators.required],
        setor_secundario_id: ['', Validators.required],
        tipo_servico_id: ['', Validators.required],
        nivel_prioridade: ['', Validators.required],
        tecnico_id: ['', Validators.required],
      });
   }

  closeModal(): void {
    this.ref.close();
  }

  openModal(): void {
    this.displayModal = !this.displayModal;
  }

  getFormValues() {
    this.formValues = this.formGroup.value;
    console.log(this.formValues);
    console.log(Object.keys(this.formGroup.controls));
  
    const nomesItens = Object.keys(this.formGroup.controls);
  
    const parametros: any = {};
  
    for (const nomeItem of nomesItens) {
      const valor = this.formGroup.controls[nomeItem].value;
      parametros[nomeItem] = valor ;
    }
  
    
    parametros['ordem_servico_id'] = this.orderService!.id;
  
    const value: any = {
      ...parametros
    };
  
    this.listCardsService.aprovarOs(value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );

    this.listCardsService.getOsByFilter([]).subscribe(
      (res) => {
        console.log('teste', res)
        this.orderService = res.result;
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

    this.feedback = [
      'Ruim',
      'Regular',
      'Bom',
      'Ótimo',
      'Excelente'
    ];
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
