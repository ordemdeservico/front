import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ListCardsService } from "../list-cards/list-cards.service";
import { OrderService } from "src/app/shared/models/order-service.model";
import { SetorSecundario } from "src/app/shared/models/setor_secundario.model";
import { Observable, lastValueFrom, map } from "rxjs";

interface DropdownOptions{
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

  feedback: string[] = [];
  setor_principal: {label: string; value: number}[] = [];
  setor_secundario: DropdownOptions[] = [];
  tecnico: DropdownOptions[] = [];
  tipo_servico: DropdownOptions[] = [];
  nivel_prioridade: string[] = [];
  selectedSetor?: number;

  constructor(
    private ref: DynamicDialogRef,
    private listCardsService: ListCardsService
  ) { }

  closeModal(): void {
    this.ref.close();
  }



  async ngOnInit() {

    this.tecnico = await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllTec()));
    this.setor_principal= await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllSetoresPrincipais()));
    this.tipo_servico = await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllServices()));
    

    const {setor_principal_id} = this.orderService!
    if (setor_principal_id) {
      this.selectedSetor = setor_principal_id;
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
