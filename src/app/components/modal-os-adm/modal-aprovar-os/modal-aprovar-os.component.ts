import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { ListCardsService } from '../../list-cards/list-cards.service';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { Observable, lastValueFrom, map } from 'rxjs';
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { MessageService, ConfirmationService } from 'primeng/api';


interface DropdownOptions {
  label: string;
  value: number;
}

@Component({
  selector: 'app-modal-aprovar-os',
  templateUrl: './modal-aprovar-os.component.html',
  styleUrls: ['./modal-aprovar-os.component.scss'],
  providers: [ MessageService, ConfirmationService ]

})

export class ModalAprovarOsComponent implements OnInit {

  @Input("orderService") orderService?: OrderService;
  @Input() displayModal?: boolean;
  @Output() attCards = new EventEmitter();


  setor_principal: { label: string; value: number }[] = [];
  setor_secundario: DropdownOptions[] = [];
  tecnico: DropdownOptions[] = [];
  tipo_servico: DropdownOptions[] = [];
  nivel_prioridade: string[] = [];
  selectedSetor?: any;
  formGroup: FormGroup;
  formValues: any[] = [];
  textValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private ref: DynamicDialogRef,
    private listCardsService: ListCardsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    

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

  onChangeSetorPrincipal(){
    this.selectedSetor = this.formGroup.get('setor_principal_id')?.value;
    this.getAllSecundarios();
  }

  openModalDecline(): any {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja declinar esta ordem de serviço?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Usuário excluido.', life: 3000 });
        this.listCardsService.declinarOs(this.orderService!.id).subscribe(
          (res) => {
            this.attCards.emit(true);
          },
          (err) => {
            console.error(err);
          }
          )
          
        },
      acceptButtonStyleClass: 'custom-accept-button',
      rejectButtonStyleClass: 'custom-reject-button'
    });
  }


  getFormValues() {
    const formValues = this.formGroup.value;
    console.log(Object.keys(this.formGroup.controls));
  
    if (this.formGroup.valid) {
      const parametros: any = { 'ordem_servico_id': this.orderService!.id };
  
      if (!this.arePropertiesEqual(formValues, this.orderService)) {
        for (const propriedade in formValues) {
          if (formValues.hasOwnProperty(propriedade)) {
            parametros[propriedade] = formValues[propriedade];
          }
        }
  
        this.listCardsService.aprovarOs(parametros).subscribe(
          (res) => {
            console.log(res);
            this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Ordem de serviço aprovada.' });
            this.attCards.emit(true);
          },
          (err) => {
            console.error(err);
          }
        );
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'É necessário preencher todos campos.' });
    }
  }
  
  arePropertiesEqual(obj1: any, obj2: any): boolean {
    const commonProperties = Object.keys(obj1).filter(prop => obj2.hasOwnProperty(prop));
  
    for (const prop of commonProperties) {
      if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    }
  
    return true;
  }

  async ngOnInit() {
    this.formGroup.patchValue({
      descricao: this.orderService?.descricao
    });
    this.tecnico = await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllTec()));
    this.setor_principal= await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllSetoresPrincipais()));
    this.tipo_servico = await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllServices()));
    
    const {setor_principal_id} = this.orderService!
    if (setor_principal_id) {
      this.selectedSetor = setor_principal_id;
      
    }
    this.formGroup.patchValue({
      setor_principal_id: setor_principal_id
    });

    this.formGroup.patchValue({
      tipo_servico_id: this.orderService?.tipo_servico_id
    });
    const {descricao} = this.orderService!
    if (descricao) {
      this.textValue = descricao;
    }

    this.getAllSecundarios();
    

    this.nivel_prioridade = [
      'P1 - 1 dia',
      'P2 - 2 dias',
      'P3 - 4 dias',
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
