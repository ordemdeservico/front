import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable, lastValueFrom, map } from 'rxjs';
import { ListCardsService } from 'src/app/components/list-cards/list-cards.service';
import { HomeLoginService } from '../home-login/home-login.service';
import { HomeFormService } from './home-form.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

interface DropdownOptions {
  label: string;
  value: number;
}

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss'],
  providers: [ DatePipe, MessageService ]
})
export class HomeFormComponent implements OnInit {

  formGroup: FormGroup;
  setor_principal: { label: string; value: number }[] = [];
  setor_secundario: DropdownOptions[] = [];
  tipo_servico: DropdownOptions[] = [];
  selectedSetor?: any;
  nome: string = '';
  email: string = '';
  data: string = '';
  id: number = 0;
  role: string = '';
  uploadedFiles: any[] = [];
  autoUpload: boolean = true;
  isSubmitting: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private listCardsService: ListCardsService,
    private loginService: HomeLoginService,
    private formService: HomeFormService,
    private datePipe: DatePipe,
    private router: Router,
    private messageService: MessageService
  ) {
    this.formGroup = this.formBuilder.group({
      setor_principal_id: ['', Validators.required],
      setor_secundario_id: ['', Validators.required],
      tipo_servico_id: ['', Validators.required],
      descricao: ['', Validators.required]
    });
   }

  obterDataAtual(): string {
    const data_insercao = new Date();
    return this.datePipe.transform(data_insercao, ' yyyy/MM/dd') || '';
  }

  onChangeSetorPrincipal(){
    this.selectedSetor = this.formGroup.get('setor_principal_id')?.value;
    this.getAllSecundarios();
  }

  onFileSelect(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onRemoveFile(event: any) {
    const removedFile = event.file;
    const index = this.uploadedFiles.indexOf(removedFile);

    if (index !== -1) {
      this.uploadedFiles.splice(index, 1);
    }
  }

  backToDashboard(){
    if (this.role == 'Admin') {
      this.router.navigate(['/dashboard-adm']);
    } else if (this.role == 'Tecnico') {
      this.router.navigate(['/dashboard-tec']);
    } else if (this.role == 'Solicitante') {
      this.router.navigate(['/dashboard-user']);
    }
  }

  onEmmmitOs() {
    if ( this.formGroup.valid && this.formGroup.value && !this.isSubmitting) {
      this.isSubmitting = true;
      const formData = new FormData();

      if ( this.uploadedFiles.length > 0) {
        for (let file of this.uploadedFiles) {
          formData.append('file', file, file.name);
        }
      }


      formData.append('solicitante_id', this.id.toString());
      formData.append('data_solicitacao', this.obterDataAtual());
      formData.append('tipo_servico_id', this.formGroup.value.tipo_servico_id);
      formData.append('descricao', this.formGroup.value.descricao);
      formData.append('setor_principal_id', this.formGroup.value.setor_principal_id);
      formData.append('setor_secundario_id', this.formGroup.value.setor_secundario_id);

      this.formService.solicitarOs(formData).subscribe({
        next: (res) => {
          console.log('Ordem de serviço emitida. ', res);
          this.isSubmitting = true;
          this.formGroup.reset();
          this.uploadedFiles = [];
        },
        error: (erro) => {
          console.error('Erro: ', erro);
          this.messageService.add({severity: 'error', summary: 'Erro ao emitir ordem de serviço.'})
        },
        complete: () => {
          this.messageService.add({severity: 'success', summary: 'Ordem de serviço emitida!'})
          setTimeout( () => {
            this.backToDashboard();
            this.isSubmitting = false;
          }, 1500)

        }
      })
    } else {
      console.error('Formulário inválido!');
      this.messageService.add({severity: 'error', summary: 'Erro ao emitir ordem de serviço.'})
    }
  }

  async ngOnInit() {
    this.isSubmitting = false;
    this.loginService.infoUser().subscribe({
      next: (res) => {
        this.nome = res.nome
        this.email = res.email
        this.id = res.id_usuario
        this.role = res.cargo
      },
      error: (err) => {
        console.error(err);
      }
    })

    this.setor_principal= await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllSetoresPrincipais()));
    this.tipo_servico = await lastValueFrom(this.formatToDropdownptions(this.listCardsService.getAllServices()));
    if (!this.selectedSetor) {
      this.selectedSetor = this.setor_principal[0].value
    }

    this.selectedSetor = this.setor_principal[0].value;
    this.getAllSecundarios();

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
