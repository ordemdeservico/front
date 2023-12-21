import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from 'src/app/shared/models/order-service.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ListCardsService } from '../../list-cards/list-cards.service';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-modal-concluir-os',
  templateUrl: './modal-concluir-os.component.html',
  styleUrls: ['./modal-concluir-os.component.scss'],
  providers: [DatePipe, MessageService],
})
export class ModalConcluirOsComponent implements OnInit {
  @Input('orderService') orderService?: OrderService;
  @Input() role?: string;
  @Output() attCards = new EventEmitter();

  formGroup: FormGroup;
  uploadedFiles: any[] = [];
  autoUpload: boolean = true;
  isSubmitting: boolean = false;



  constructor(
    private listCardsService: ListCardsService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private messageService: MessageService,
    private router: Router,
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

  onFileSelect(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  // concluirOs() {
  //   if (this.formGroup.valid) {

  //     const values: any =  {
  //       ordem_servico_id: this.orderService!.id,
  //       data_final: this.obterDataAtual(),
  //       material: this.formGroup.value.material,
  //       relatorio: this.formGroup.value.relatorio
  //     }

  //     this.listCardsService.concluirOs(values).subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         console.log(values)
  //         this.attCards.emit(true);
  //       },
  //       error: (err) => {
  //         console.error(err);
  //       }
  //     })
  //     console.log('values: ', this.formGroup.value)
  //   }
  // }

  onEmmmitOs() {
    if (
      this.formGroup.valid &&
      this.formGroup.value &&
      this.isSubmitting == false
    ) {
      const formData = new FormData();
      for (let file of this.uploadedFiles) {
        formData.append('file', file, file.name);
      }

      formData.append('ordem_servico_id', this.orderService!.id.toString());
      formData.append('data_final', this.obterDataAtual());
      formData.append('material', this.formGroup.value.material);
      formData.append('relatorio', this.formGroup.value.relatorio);

      this.listCardsService.concluirOs(formData).subscribe({
        next: (res) => {
          console.log('Ordem de serviço concluida. ', res);
          this.isSubmitting = true;
          // this.formGroup.reset();
        },
        error: (erro) => {
          console.error('Erro: ', erro);
          this.messageService.add({severity: 'error', summary: 'Erro ao concluir ordem de serviço.'})
        },
        complete: () => {
          this.messageService.add({severity: 'success', summary: 'Ordem de serviço concluida!'})
          setTimeout( () => {
            this.attCards.emit(true);
            this.isSubmitting = false;
          }, 1500);
        }
      })
    } else {
      console.error('Formulário inválido!');
      this.messageService.add({severity: 'error', summary: 'Erro ao concluir ordem de serviço.'})
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
  ngOnInit(): void {
    this.isSubmitting = false;
  }
}
