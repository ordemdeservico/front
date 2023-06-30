import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ModalAddUserService } from './modal-add-user.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DatePipe } from '@angular/common';
import { ListAdm } from 'src/app/pages/list-adm/list-adm';
import { ListAdmComponent } from 'src/app/pages/list-adm/list-adm.component';
import { lastValueFrom } from 'rxjs';
import { ListAdmService } from "src/app/pages/list-adm/list-adm.service";


@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.scss'],
  providers: [ DatePipe ]
})
export class ModalAddUserComponent implements OnInit {

  submitted = false;
  categories: { id: number, nome: string }[] = []
  outsourced: string[] = [];
  formGroup: FormGroup;
  showEmpresaInput = false;
  data_insercao: string;
  userList: ListAdm[] = [];
  office: {item: { label: string, value: string } [] }[] = [
    {
        item: [
          { label: 'Administrador', value: 'Admin' },
          { label: 'Técnico', value: 'Tecnico' },
          { label: 'Solicitante', value: 'Solicitante' },
          { label: 'Bloqueado', value: 'Bloqueado' }
        ]
  }
];


  constructor(
    private formBuilder: FormBuilder,
    private service: ModalAddUserService,
    private ref: DynamicDialogRef,
    private datePipe: DatePipe,
    private ListAdmComponent: ListAdmComponent,
    private listAdmService: ListAdmService
  ) {
    this.data_insercao = this.obterDataAtual();
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      cargo: ['', Validators.required],
      categoria: ['', Validators.required],
      terceirizado: ['', Validators.required],
      empresa: ['', this.showEmpresaInput ? Validators.required : null],
      data_insercao: [this.obterDataAtual()]
    });
 
  }
  obterDataAtual(): string {
    const data_insercao = new Date();
    return this.datePipe.transform(data_insercao, 'yyyy/MM/dd') || ''; 
  }

  closeModal(): void {
    this.ref.close();
  }

  submitForm() {
    this.submitted = true;
    const formValues = this.formGroup.value;
    formValues.tipo_servico_id = formValues.categoria;
    delete formValues.categoria;
    formValues.data_insercao = this.obterDataAtual();
    if (this.formGroup.valid) {
      if (formValues.terceirizado == 'Sim') {
        formValues.terceirizado = 1;
      } else if (formValues.terceirizado == 'Não') {
        formValues.terceirizado = 0;
      }
      this.service.addUser(formValues).subscribe(
        response => {
          console.log("Dados enviados com sucesso!", response);
          this.closeModal();
          this.ListAdmComponent.loadUserList();
        },
        error => {
          console.error("Erro ao enviar os dados:", error);
        }
      );
    } else {
      this.formGroup.markAllAsTouched();
    }
  }


  async ngOnInit() {
    this.getAllCategories();
    this.formGroup.get('terceirizado')?.valueChanges.subscribe((value) => {
      this.showEmpresaInput = value === 'Sim';
    
      if (this.showEmpresaInput) {
        this.formGroup.get('empresa')?.setValidators([Validators.required]);
      } else {
        this.formGroup.get('empresa')?.clearValidators();
      }
    
      this.formGroup.get('empresa')?.updateValueAndValidity();
    });

    this.outsourced = [
      'Sim',
      'Não'
    ]

  }
  async getAllCategories() {
    try {
      const response = await lastValueFrom(this.listAdmService.getAllCategories());
      if (response.result && Array.isArray(response.result)) {
        this.categories = response.result;
      } else {
        console.error('Estrutura de resposta inválida:', response);
      }
    } catch (error) {
      console.error(error);
    }
  }

}





























  // outsourcedStatus: boolean = false;
  // formGroup: FormGroup;
  // categorys: FormControl;
  // outsourcedForm: FormControl;
  // categoryList: string[] = ['Civil', 'Hidraulico', 'Eletrico', 'Pintura', 'Mecanica', 'Mobiliaria', 'Ar-Condicionado', 'Eletronica', 'Outros'];
  // outsourcedList: string[] = ['Sim', 'Não'];

  // constructor(
  //   public dialogRef: MatDialogRef<ModalAddUserComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any,
  //   private formBuilder: FormBuilder,
  //   private service: ModalAddUserService,
  //   private router: Router
  // ) {
  //   this.formGroup = this.formBuilder.group({
  //     nome: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     senha: ['', Validators.required],
  //     empresa: ['', this.requiredIf(() => this.outsourcedStatus)]
  //   });

  //   this.categorys = new FormControl('', Validators.required);
  //   this.outsourcedForm = new FormControl('', Validators.required);

  //   this.outsourcedForm.valueChanges.subscribe((selectedValue: string | null) => {
  //     if (selectedValue === 'Sim') {
  //       this.outsourcedStatus = true;
  //       this.formGroup.get('empresa')?.setValidators([Validators.required]);
  //     } else {
  //       this.outsourcedStatus = false;
  //       this.formGroup.get('empresa')?.clearValidators();
  //     }

  //     this.formGroup.get('empresa')?.updateValueAndValidity();
  //   });
  // }

  // checkFormValidity(): boolean {
  //   const categorySelected = !!this.categorys.value;
  //   const outsourcedSelected = !!this.outsourcedForm.value || this.outsourcedForm.value === '';
  
  //   if (outsourcedSelected) {
  //     if (categorySelected && this.formGroup.valid) {
  //       console.log('Fechar menu');
  //       return true;
  //     }
  //   } else {
  //     if (categorySelected && !this.outsourcedStatus) {
  //       console.log('Fechar menu');
  //       return true;
  //     }
  //   }
  
  //   this.formGroup.markAllAsTouched();
  //   return false;
  // }

  // submitForm() {
  //   if (!this.outsourcedForm.valid) {
  //     console.log("Não fechar o modal");
  //     return;
  //   }
  
  //   if (this.checkFormValidity()) {
  //     const formValues = this.formGroup.value; // Obter os valores do formulário
  //   // // Enviar os valores para o backend (exemplo fictício)
  //     this.service.addUser(formValues).subscribe(
  //     response => {
  //       // Lógica após o sucesso do envio para o backend
  //       console.log("Dados enviados com sucesso!");
  //     },
  //     error => {
  //       // Lógica em caso de erro no envio para o backend
  //       console.error("Erro ao enviar os dados:", error);
  //     }
  //   );

  //     this.dialogRef.close(true);
  //     console.log("Modal fechado");
  //   } else {
  //     console.log("Não fechar o modal");
  //   }
  // }

  // ngOnInit() {
    
  // }

  // requiredIf(condition: () => boolean) {
  //   return (control: FormControl) => {
  //     if (condition()) {
  //       return Validators.required(control);
  //     }
  //     return null;
  //   };
  // }
